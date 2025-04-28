import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PurchasedEventDocument = HydratedDocument<PurchasedEvent>;

@Schema()
export class PurchasedEvent {
  @Prop({ required: true })
  contract: string;

  @Prop({ required: true })
  chainId: number;

  @Prop({ required: true })
  txHash: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true })
  itemId: string; // It's a string because it's a uint256 (so we use BigInt on js)

  @Prop({ required: true })
  amount: string; // It's a string because it's a uint32 (so we use BigInt on js)

  @Prop({ required: true })
  createdAt: Date;
}

export const PurchasedEventSchema =
  SchemaFactory.createForClass(PurchasedEvent);
