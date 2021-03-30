import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Setting } from '../setting/setting.schema';
import { Role } from './user.model';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop() name: string;

  @Prop({ enum: Role, default: Role.USER }) role: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Setting' }] })
  settings: Setting[];
}

export const UserSchema = SchemaFactory.createForClass(User);
