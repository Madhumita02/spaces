import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpaceDocument = Space & Document;

@Schema({ timestamps: true })
export class Space {
  @Prop({ required: true }) name: string;
  @Prop() description: string;
  @Prop() address: string;
  @Prop() capacity: number;
  @Prop([String]) amenities: string[];
  @Prop([String]) images: string[]; // URLs
  @Prop({ type: String, required: true }) owner: string; // user id of brand owner
  @Prop({ default: 0 }) hourlyRate: number; // simple pricing
}
export const SpaceSchema = SchemaFactory.createForClass(Space);
