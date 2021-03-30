import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDocument, User } from './user.schema';
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get()
  async getUsers(): Promise<User[]> {
    return this.service.getAll();
  }
}
