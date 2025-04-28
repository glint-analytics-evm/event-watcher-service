import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, catchError, filter, from, map, mergeMap, of } from 'rxjs';
import { EventService } from 'src/event/event.service';
import { Sale__factory } from 'src/generated-contract-types';
import { PurchasedEvent as PurchasedEventObject } from 'src/generated-contract-types/Sale';
import {
  PurchasedEvent,
  PurchasedEventDocument,
} from './schemas/purchased-event.schema';

@Injectable()
export class PurchasedEventDbService {
  constructor(
    @InjectModel(PurchasedEvent.name)
    private purchasedEventModel: Model<PurchasedEventDocument>,
    private eventService: EventService,
  ) {
    this.$create.subscribe((create) => this.logger.debug('🚀 create:', create));
  }

  private readonly logger = new Logger(PurchasedEventDbService.name);
  private eventToFilter =
    Sale__factory.createInterface().getEvent('Purchased').name;
  private $purchasedEvents = this.eventService.events.pipe(
    filter((event) => event.eventName === this.eventToFilter),
    map((event) => {
      const transferObject: PurchasedEventObject.OutputObject = JSON.parse(
        event.eventArgs,
      );

      return {
        event,
        object: transferObject,
      };
    }),
    catchError((error) => {
      this.logger.error('🚀 ~ purchasedEvents ~ error:', error);

      return of(null);
    }),
    filter((event) => event.event != null && event.object != null),
  );

  private $create: Observable<PurchasedEventDocument | null> =
    this.$purchasedEvents.pipe(
      mergeMap((event) =>
        from(
          this.create(
            event.event.contractAddress,
            event.event.chainId,
            event.event.txHash,
            event.object.user,
            event.object.itemId.toString(),
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
    user: string,
    itemId: string,
    amount: string,
  ): Promise<PurchasedEventDocument> {
    // Exist check is not done because we can purchase the same item multiple times in one tx
    const doc = {
      contract: contract,
      chainId: chainId,
      txHash: txHash,
      user: user,
      itemId: itemId,
      amount: amount,
      createdAt: Date.now(),
    };

    return await new this.purchasedEventModel(doc).save();
  }
}
