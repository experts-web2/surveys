import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingModule } from './setting/setting.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SettingModule,
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://experts-web2:2@Hisglory@cluster0.vthhr.mongodb.net/surveys',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
