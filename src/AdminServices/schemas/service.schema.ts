import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

export enum Category {
  ADVENTURE = 'Adventure',
  CALSSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema({
  timestamps: true,
})
export class Service {
  @Prop()
  service_title: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
