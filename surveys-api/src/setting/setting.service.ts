import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Setting, SettingDocument } from './setting.schema';

@Injectable()
export class SettingService {
  constructor(
    @InjectModel(Setting.name) private model: Model<SettingDocument>,
  ) {}

  async getAll(): Promise<Setting[]> {
    return await this.model.find().exec();
  }

  async create(setting: Setting): Promise<Setting> {
    const newSetting = new this.model(setting);
    return await newSetting.save();
  }

  async update(setting: SettingDocument): Promise<Setting> {
    return await this.model.findByIdAndUpdate(setting._id, setting);
  }

  async delete(_id: string): Promise<boolean> {
    await this.model.deleteOne({ _id });
    return true;
  }
}
