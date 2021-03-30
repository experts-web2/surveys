import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { Setting, SettingDocument } from './setting.schema';

@Controller('settings')
export class SettingController {
  constructor(private readonly service: SettingService) {}
  @Get() async getSettings(): Promise<Setting[]> {
    return await this.service.getAll();
  }

  @Post()
  async createSetting(@Body() setting: Setting): Promise<Setting> {
    return await this.service.create(setting);
  }

  @Put()
  async updateSetting(@Body() setting: SettingDocument): Promise<Setting> {
    return await this.service.update(setting);
  }

  @Delete()
  async deleteSetting(@Query('id') id: string): Promise<boolean> {
    return await this.service.delete(id);
  }
}
