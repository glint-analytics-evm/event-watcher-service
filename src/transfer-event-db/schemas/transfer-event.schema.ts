import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransferEventDocument = HydratedDocument<TransferEvent>;

@Schema()
export class TransferEvent {
  @Prop({ required: true })
  contract: string;

  @Prop({ required: true })
  chainId: number;

  @Prop({ required: true })
  txHash: string;

  @Prop({ required: true })
  from: string;

  @Prop({ required: true })
  to: string;

  @Prop({ required: true })
  tokenId: string; // It's a string because it's a uint256 (so we use BigInt on js)

  @Prop({ required: true })
  createdAt: Date;
}

export const TransferEventSchema = SchemaFactory.createForClass(TransferEvent);
