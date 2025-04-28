import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RewardDistributedEventDocument =
  HydratedDocument<RewardDistributedEvent>;

@Schema()
export class RewardDistributedEvent {
  @Prop({ required: true })
  contract: string;

  @Prop({ required: true })
  chainId: number;

  @Prop({ required: true })
  txHash: string;

  @Prop({ required: true })
  recipient: string;

  @Prop({ required: true })
  amount: string; // It's a string because it's a uint256 (so we use BigInt on js)

  @Prop({ required: true })
  createdAt: Date;
}

export const RewardDistributedEventSchema = SchemaFactory.createForClass(
  RewardDistributedEvent,
);
