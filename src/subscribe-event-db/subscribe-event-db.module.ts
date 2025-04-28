import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import {
  SubscribeEvent,
  SubscribeEventSchema,
} from './schemas/subscribe-event.schema';
import { SubscribeEventDbService } from './subscribe-event-db.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SubscribeEvent.name,
        schema: SubscribeEventSchema,
      },
    ]),
    EventModule,
  ],
  providers: [SubscribeEventDbService],
})
export class SubscribeEventDbModule {}
