import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, catchError, filter, from, map, mergeMap, of } from 'rxjs';
import { EventService } from 'src/event/event.service';
import { Subscription__factory } from 'src/generated-contract-types';
import { SubscribeEvent as SubscribeEventObject } from 'src/generated-contract-types/Subscription';
import {
  SubscribeEvent,
  SubscribeEventDocument,
} from './schemas/subscribe-event.schema';

@Injectable()
export class SubscribeEventDbService {
  constructor(
    @InjectModel(SubscribeEvent.name)
    private subscribeEventModel: Model<SubscribeEventDocument>,
    private eventService: EventService,
  ) {
    this.$create.subscribe((create) => this.logger.debug('🚀 create:', create));
  }

  private readonly logger = new Logger(SubscribeEventDbService.name);
  private eventToFilter =
    Subscription__factory.createInterface().getEvent('Subscribe').name;
  private $subscribeEvents = this.eventService.events.pipe(
    filter((event) => event.eventName === this.eventToFilter),
    map((event) => {
      const transferObject: SubscribeEventObject.OutputObject = JSON.parse(
        event.eventArgs,
      );

      return {
        event,
        object: transferObject,
      };
    }),
    catchError((error) => {
      this.logger.error('🚀 ~ subscribeEvents ~ error:', error);

      return of(null);
    }),
    filter((event) => event.event != null && event.object != null),
  );

  private $create: Observable<SubscribeEventDocument | null> =
    this.$subscribeEvents.pipe(
      mergeMap((event) =>
        from(
          this.create(
            event.event.contractAddress,
            event.event.chainId,
            event.event.txHash,
            event.object.user,
            event.object.token,
            event.object.period.toString(),
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
    user: string,
    token: string,
    period: string,
  ): Promise<SubscribeEventDocument> {
    // Exist check is not done because we can purchase the same item multiple times in one tx
    const doc = {
      contract: contract,
      chainId: chainId,
      txHash: txHash,
      user: user,
      token: token,
      period: period,
      createdAt: Date.now(),
    };

    return await new this.subscribeEventModel(doc).save();
  }
}
