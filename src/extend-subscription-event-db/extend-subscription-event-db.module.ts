import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import { ExtendSubscriptionEventDbService } from './extend-subscription-event-db.service';
import {
  ExtendSubscriptionEvent,
  ExtendSubscriptionEventSchema,
} from './schemas/extend-subscription-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ExtendSubscriptionEvent.name,
        schema: ExtendSubscriptionEventSchema,
      },
    ]),
    EventModule,
  ],
  providers: [ExtendSubscriptionEventDbService],
})
export class ExtendSubscriptionEventDbModule {}
