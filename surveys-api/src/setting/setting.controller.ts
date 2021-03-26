import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingService } from './setting.service';
import { Setting } from './setting.schema';

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
}
