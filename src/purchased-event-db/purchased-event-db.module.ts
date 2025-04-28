import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import { PurchasedEventDbService } from './purchased-event-db.service';
import {
  PurchasedEvent,
  PurchasedEventSchema,
} from './schemas/purchased-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PurchasedEvent.name,
        schema: PurchasedEventSchema,
      },
    ]),
    EventModule,
  ],
  providers: [PurchasedEventDbService],
})
export class PurchasedEventDbModule {}
