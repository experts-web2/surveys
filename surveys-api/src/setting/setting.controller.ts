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
  constructor(private readonly settingService: SettingService) {}
  @Get() async getSettings(): Promise<Setting[]> {
    return await this.settingService.getAll();
  }

  @Post()
  async createSetting(@Body() setting: Setting): Promise<Setting> {
    return await this.settingService.create(setting);
  }

  @Put()
  async updateSetting(@Body() setting: SettingDocument): Promise<Setting> {
    return await this.settingService.update(setting);
  }

  @Delete()
  async deleteSetting(@Query('id') id: string): Promise<boolean> {
    return await this.settingService.delete(id);
  }
}
