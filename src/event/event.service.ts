import { Injectable, Logger } from '@nestjs/common';
import { EventFilter, Log, WebSocketProvider } from 'ethers';
import { Observable, Subject, shareReplay, tap } from 'rxjs';
import { ServiceError } from 'src/common/ServiceError';
import { stringify } from 'src/common/utils';
import { ConfigurationService } from 'src/configuration/configuration.service';
import {
  IERC721__factory,
  RewardDistribution__factory,
  Sale__factory,
  Subscription__factory,
} from 'src/generated-contract-types';
import { TransferEvent } from 'src/generated-contract-types/IERC721';
import { RewardDistributedEvent } from 'src/generated-contract-types/RewardDistribution';
import { PurchasedEvent } from 'src/generated-contract-types/Sale';
import {
  ExtendSubscriptionEvent,
  SubscribeEvent,
} from 'src/generated-contract-types/Subscription';

export type EventType = {
  contractAddress: string;
  chainId: number;
  txHash: string;
  eventName: string;
  eventSignature: string;
  eventArgs: string;
};

type EventServiceErrorTypes = 'LogIsInvalid';
export class EventServiceError extends ServiceError<EventServiceErrorTypes> {}

@Injectable()
export class EventService {
  constructor(private configurationService: ConfigurationService) {
    this.listenEvents();
  }

  private readonly logger = new Logger(EventService.name);
  private $events = new Subject<EventType>();
  events: Observable<EventType> = this.$events.asObservable().pipe(
    tap((event) => this.logger.debug('🚀 ~ event: ', event)),
    shareReplay(1),
  );

  private listenEvents() {
    const eventFilter: EventFilter = {
      address: this.addressesToWatch(),
    };

    this.configurationService.useWSSProvider(
      (msg) => this.logger.log(`🚀 ~ ${msg}`),
      (wsp) => {
        wsp
          .on(eventFilter, (log: Log) => {
            try {
              this.processLog(log);
            } catch (error) {
              this.logger.error('🚀 ~ listenEvents ~ error: ', error);
            }
          })
          .then();
      },
    );
  }

  private addressesToWatch() {
    const config = this.configurationService.getConfig();
    return [
      config.erc721Address,
      config.rewardDistributionAddress,
      config.saleAddress,
      config.subscriptionAddress,
    ];
  }

  private processLog(log: Log) {
    const txHash = log.transactionHash;
    const contractAddress = log.address;
    const topicHash = log.topics[0];
    const chainId = Number(
      (log.provider as WebSocketProvider)._network.chainId,
    );

    if (
      txHash == null ||
      contractAddress == null ||
      topicHash == null ||
      isNaN(chainId) ||
      log.removed
    )
      throw new EventServiceError(
        'LogIsInvalid',
        `Log for tx:${log.address} is not valid`,
      );

    switch (topicHash) {
      case IERC721__factory.createInterface().getEvent('Transfer').topicHash:
        this.processTransferEventLog(contractAddress, chainId, txHash, log);
        break;
      case RewardDistribution__factory.createInterface().getEvent(
        'RewardDistributed',
      ).topicHash:
        this.processRewardDistributedEventLog(
          contractAddress,
          chainId,
          txHash,
          log,
        );
        break;
      case Sale__factory.createInterface().getEvent('Purchased').topicHash:
        this.processPurchasedEventLog(contractAddress, chainId, txHash, log);
        break;
      case Subscription__factory.createInterface().getEvent('Subscribe')
        .topicHash:
        this.processSubscribeEventLog(contractAddress, chainId, txHash, log);
        break;
      case Subscription__factory.createInterface().getEvent(
        'ExtendSubscription',
      ).topicHash:
        this.processExtendSubscriptionEventLog(
          contractAddress,
          chainId,
          txHash,
          log,
        );
        break;
    }
  }

  private processTransferEventLog(
    contractAddress: string,
    chainId: number,
    txHash: string,
    log: Log,
  ) {
    const logDescription = IERC721__factory.createInterface().parseLog({
      data: log.data,
      topics: [...log.topics],
    });

    const args = logDescription.args.toObject() as TransferEvent.OutputObject;

    this.emitEvent(
      contractAddress,
      chainId,
      txHash,
      logDescription.name,
      logDescription.signature,
      stringify(args),
    );
  }

  private processRewardDistributedEventLog(
    contractAddress: string,
    chainId: number,
    txHash: string,
    log: Log,
  ) {
    const logDescription =
      RewardDistribution__factory.createInterface().parseLog({
        data: log.data,
        topics: [...log.topics],
      });

    const args =
      logDescription.args.toObject() as RewardDistributedEvent.OutputObject;

    this.emitEvent(
      contractAddress,
      chainId,
      txHash,
      logDescription.name,
      logDescription.signature,
      stringify(args),
    );
  }

  private processPurchasedEventLog(
    contractAddress: string,
    chainId: number,
    txHash: string,
    log: Log,
  ) {
    const logDescription = Sale__factory.createInterface().parseLog({
      data: log.data,
      topics: [...log.topics],
    });

    const args = logDescription.args.toObject() as PurchasedEvent.OutputObject;

    this.emitEvent(
      contractAddress,
      chainId,
      txHash,
      logDescription.name,
      logDescription.signature,
      stringify(args),
    );
  }

  private processSubscribeEventLog(
    contractAddress: string,
    chainId: number,
    txHash: string,
    log: Log,
  ) {
    const logDescription = Subscription__factory.createInterface().parseLog({
      data: log.data,
      topics: [...log.topics],
    });

    const args = logDescription.args.toObject() as SubscribeEvent.OutputObject;

    this.emitEvent(
      contractAddress,
      chainId,
      txHash,
      logDescription.name,
      logDescription.signature,
      stringify(args),
    );
  }

  private processExtendSubscriptionEventLog(
    contractAddress: string,
    chainId: number,
    txHash: string,
    log: Log,
  ) {
    const logDescription = Subscription__factory.createInterface().parseLog({
      data: log.data,
      topics: [...log.topics],
    });

    const args =
      logDescription.args.toObject() as ExtendSubscriptionEvent.OutputObject;

    this.emitEvent(
      contractAddress,
      chainId,
      txHash,
      logDescription.name,
      logDescription.signature,
      stringify(args),
    );
  }

  private emitEvent(
    contractAddress: string,
    chainId: number,
    txHash: string,
    eventName: string,
    eventSignature: string,
    eventArgs: string,
  ) {
    this.$events.next({
      contractAddress,
      chainId,
      txHash,
      eventName,
      eventSignature,
      eventArgs,
    });
  }
}
