import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, catchError, filter, from, map, mergeMap, of } from 'rxjs';
import { EventService } from 'src/event/event.service';
import { RewardDistribution__factory } from 'src/generated-contract-types';
import { RewardDistributedEvent as RewardDistributedEventObject } from 'src/generated-contract-types/RewardDistribution';
import {
  RewardDistributedEvent,
  RewardDistributedEventDocument,
} from './schemas/reward-distributed-event.schema';

@Injectable()
export class RewardDistributedEventDbService {
  constructor(
    @InjectModel(RewardDistributedEvent.name)
    private rewardDistributedEventModel: Model<RewardDistributedEventDocument>,
    private eventService: EventService,
  ) {
    this.$create.subscribe((create) => this.logger.debug('🚀 create:', create));
  }

  private readonly logger = new Logger(RewardDistributedEventDbService.name);
  private eventToFilter =
    RewardDistribution__factory.createInterface().getEvent('RewardDistributed')
      .name;
  private $rewardDistributedEvents = this.eventService.events.pipe(
    filter((event) => event.eventName === this.eventToFilter),
    map((event) => {
      const transferObject: RewardDistributedEventObject.OutputObject =
        JSON.parse(event.eventArgs);

      return {
        event,
        object: transferObject,
      };
    }),
    catchError((error) => {
      this.logger.error('🚀 ~ rewardDistributedEvents ~ error:', error);

      return of(null);
    }),
    filter((event) => event.event != null && event.object != null),
  );

  private $create: Observable<RewardDistributedEventDocument | null> =
    this.$rewardDistributedEvents.pipe(
      mergeMap((event) =>
        from(
          this.create(
            event.event.contractAddress,
            event.event.chainId,
            event.event.txHash,
            event.object.recipient,
            event.object.amount.toString(),
          ),
        ).pipe(
          catchError((err) => {
            this.logger.error('🚀 ~ create ~ mergeMap ~ err:', err);

            return of(null);
          }),
        ),
      ),
      catchError((error) => {
        this.logger.error('🚀 ~ create ~ error:', error);

        return of(null);
      }),
    );

  private async create(
    contract: string,
    chainId: number,
    txHash: string,
    recipient: string,
    amount: string,
  ): Promise<RewardDistributedEventDocument> {
    // Exist check is not done because we can send the same reward multiple times in one tx
    const doc = {
      contract: contract,
      chainId: chainId,
      txHash: txHash,
      recipient: recipient,
      amount: amount,
      createdAt: Date.now(),
    };

    return await new this.rewardDistributedEventModel(doc).save();
  }
}
