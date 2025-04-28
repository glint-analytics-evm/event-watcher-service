import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationModule } from './configuration/configuration.module';
import { EventModule } from './event/event.module';
import { TransferEventDbModule } from './transfer-event-db/transfer-event-db.module';
import { RewardDistributedEventDbModule } from './reward-distributed-event-db/reward-distributed-event-db.module';
import { PurchasedEventDbModule } from './purchased-event-db/purchased-event-db.module';
import { SubscribeEventDbModule } from './subscribe-event-db/subscribe-event-db.module';
import { ExtendSubscriptionEventDbModule } from './extend-subscription-event-db/extend-subscription-event-db.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    ConfigurationModule,
    EventModule,
    TransferEventDbModule,
    RewardDistributedEventDbModule,
    PurchasedEventDbModule,
    SubscribeEventDbModule,
    ExtendSubscriptionEventDbModule,
  ],
})
export class AppModule {}
