import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Observable, catchError, filter, from, map, mergeMap, of } from 'rxjs';
import { ServiceError } from 'src/common/ServiceError';
import { EventService } from 'src/event/event.service';
import { IERC721__factory } from 'src/generated-contract-types';
import { TransferEvent as TransferEventObject } from 'src/generated-contract-types/IERC721';
import {
  TransferEvent,
  TransferEventDocument,
} from './schemas/transfer-event.schema';

type TransferEventDbServiceErrorTypes = 'TransferEventAlreadyExists';
export class TransferEventDbServiceError extends ServiceError<TransferEventDbServiceErrorTypes> {}

@Injectable()
export class TransferEventDbService {
  constructor(
    @InjectModel(TransferEvent.name)
    private transferEventModel: Model<TransferEventDocument>,
    private eventService: EventService,
  ) {
    this.$create.subscribe((create) => this.logger.debug('🚀 create:', create));
  }

  private readonly logger = new Logger(TransferEventDbService.name);

  private eventToFilter =
    IERC721__factory.createInterface().getEvent('Transfer').name;
  private $transferEvents = this.eventService.events.pipe(
    filter((event) => event.eventName === this.eventToFilter),
    map((event) => {
      const transferObject: TransferEventObject.OutputObject = JSON.parse(
        event.eventArgs,
      );

      return {
        event,
        object: transferObject,
      };
    }),
    catchError((error) => {
      this.logger.error('🚀 ~ transferEvents ~ error:', error);

      return of(null);
    }),
    filter((event) => event.event != null && event.object != null),
  );

  private $create: Observable<TransferEventDocument | null> =
    this.$transferEvents.pipe(
      mergeMap((event) =>
        from(
          this.create(
            event.event.contractAddress,
            event.event.chainId,
            event.event.txHash,
            event.object.from,
            event.object.to,
            event.object.tokenId.toString(),
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
    from: string,
    to: string,
    tokenId: string,
  ): Promise<TransferEventDocument> {
    if (await this.exists({ contract, chainId, txHash, from, to, tokenId }))
      throw new TransferEventDbServiceError(
        'TransferEventAlreadyExists',
        `Given TransferEvent already exists: contract=${contract}, chainId=${chainId}, txHash=${txHash}`,
      );

    const doc = {
      contract: contract,
      chainId: chainId,
      txHash: txHash,
      from: from,
      to: to,
      tokenId: tokenId,
      createdAt: Date.now(),
    };

    return await new this.transferEventModel(doc).save();
  }

  private async exists(filter: FilterQuery<TransferEventDocument>) {
    return await this.transferEventModel.exists(filter);
  }
}
