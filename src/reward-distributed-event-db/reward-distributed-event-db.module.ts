import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from 'src/event/event.module';
import { RewardDistributedEventDbService } from './reward-distributed-event-db.service';
import {
  RewardDistributedEvent,
  RewardDistributedEventSchema,
} from './schemas/reward-distributed-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RewardDistributedEvent.name,
        schema: RewardDistributedEventSchema,
      },
    ]),
    EventModule,
  ],
  providers: [RewardDistributedEventDbService],
})
export class RewardDistributedEventDbModule {}
