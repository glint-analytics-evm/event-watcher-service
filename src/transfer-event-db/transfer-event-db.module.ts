import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import {
  TransferEvent,
  TransferEventSchema,
} from './schemas/transfer-event.schema';
import { TransferEventDbService } from './transfer-event-db.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TransferEvent.name, schema: TransferEventSchema },
    ]),
    EventModule,
  ],
  providers: [TransferEventDbService],
})
export class TransferEventDbModule {}
