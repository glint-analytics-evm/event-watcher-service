import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExtendSubscriptionEventDocument =
  HydratedDocument<ExtendSubscriptionEvent>;

@Schema()
export class ExtendSubscriptionEvent {
  @Prop({ required: true })
  contract: string;

  @Prop({ required: true })
  chainId: number;

  @Prop({ required: true })
  txHash: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  token: string;

  @Prop({ required: true })
  period: string; // It's a string because it's a uint256 (so we use BigInt on js)

  @Prop({ required: true })
  createdAt: Date;
}

export const ExtendSubscriptionEventSchema = SchemaFactory.createForClass(
  ExtendSubscriptionEvent,
);
