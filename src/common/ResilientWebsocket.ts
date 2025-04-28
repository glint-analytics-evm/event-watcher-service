import { Networkish, WebSocketProvider } from 'ethers';
import { WebSocket } from 'ws';

const EXPECTED_PONG_BACK = 10000; // 10 seconds
const KEEP_ALIVE_CHECK_INTERVAL = 120000; // 2 minute

// Inspired from: https://github.com/ethers-io/ethers.js/issues/1053#issuecomment-1745612729
export const ResilientWebsocket = (
  url: string,
  network: Networkish,
  logger: (message: string) => void,
  task: (provider: WebSocketProvider) => void,
) => {
  let terminate = false;
  let pingTimeout: NodeJS.Timeout | null = null;
  let keepAliveInterval: NodeJS.Timeout | null = null;
  let ws: WebSocket | null;

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const startConnection = () => {
    ws = new WebSocket(url);
    ws.on('open', async () => {
      keepAliveInterval = setInterval(() => {
        if (!ws) {
          logger('No websocket, exiting keep alive interval');
          return;
        }
        logger('Checking if the connection is alive, sending a ping');

        ws.ping();

        // Use `WebSocket#terminate()`, which immediately destroys the connection,
        // instead of `WebSocket#close()`, which waits for the close timer.
        // Delay should be equal to the interval at which your server
        // sends out pings plus a conservative assumption of the latency.
        pingTimeout = setTimeout(() => {
          if (ws) ws.terminate();
        }, EXPECTED_PONG_BACK);
      }, KEEP_ALIVE_CHECK_INTERVAL);

      const wsp = new WebSocketProvider(() => ws!, network);

      while (ws?.readyState !== WebSocket.OPEN) {
        logger('Waiting for websocket to be open');
        await sleep(1000);
      }

      wsp._start();

      while (!wsp.ready) {
        logger('Waiting for websocket provider to be ready');
        await sleep(1000);
      }

      task(wsp);
    });

    ws.on('close', () => {
      console.error('The websocket connection was closed');
      if (keepAliveInterval) clearInterval(keepAliveInterval);
      if (pingTimeout) clearTimeout(pingTimeout);
      if (!terminate) startConnection();
    });

    ws.on('pong', () => {
      logger('Received pong, so connection is alive, clearing the timeout');
      if (pingTimeout) clearInterval(pingTimeout);
    });

    return ws;
  };

  startConnection();

  return () => {
    terminate = true;
    if (keepAliveInterval) clearInterval(keepAliveInterval);
    if (pingTimeout) clearTimeout(pingTimeout);
    if (ws) {
      ws.removeAllListeners();
      ws.terminate();
    }
  };
};
