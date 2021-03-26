import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SettingControls, SettingType } from './setting.modal';

export type SettingDocument = Setting & Document;

@Schema()
export class Setting {
  @Prop()
  label: string;

  @Prop()
  type: string;

  @Prop()
  control: string;

  @Prop()
  options: string[];

  @Prop({})
  value: string;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
