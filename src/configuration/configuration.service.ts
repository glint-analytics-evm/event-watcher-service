import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WebSocketProvider, ethers } from 'ethers';
import { readJsonSync } from 'fs-extra';
import { ResilientWebsocket } from 'src/common/ResilientWebsocket';
import { ServiceError } from 'src/common/ServiceError';

type Config = {
  erc721Address: string;
  rewardDistributionAddress: string;
  saleAddress: string;
  subscriptionAddress: string;
};

type ConfigurationServiceErrorTypes = 'InvalidConfig';
export class ConfigurationServiceError extends ServiceError<ConfigurationServiceErrorTypes> {}

@Injectable()
export class ConfigurationService {
  constructor(private config: ConfigService) {}

  useWSSProvider(
    logger: (message: string) => void,
    task: (provider: WebSocketProvider) => void,
  ) {
    const wssUrl = this.config.get<string>('WSS_URL');
    const chainId = this.config.get<number>('CHAIN_ID');

    ResilientWebsocket(wssUrl, BigInt(chainId), logger, task);
  }

  getConfig(): Config {
    const config: Config = readJsonSync('./config.json');

    if (!ethers.isAddress(config.erc721Address))
      throw new ConfigurationServiceError(
        'InvalidConfig',
        'ERC721 address must be provided.',
      );

    if (!ethers.isAddress(config.rewardDistributionAddress))
      throw new ConfigurationServiceError(
        'InvalidConfig',
        'RewardDistribution address must be provided.',
      );

    if (!ethers.isAddress(config.saleAddress))
      throw new ConfigurationServiceError(
        'InvalidConfig',
        'Sale address must be provided.',
      );

    if (!ethers.isAddress(config.subscriptionAddress))
      throw new ConfigurationServiceError(
        'InvalidConfig',
        'Subscription address must be provided.',
      );

    return config;
  }
}
