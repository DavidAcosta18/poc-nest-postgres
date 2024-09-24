import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GetUsersQuery } from '../application/get-users/get-users.query';
import { CreateUserCommand } from '../application/create-user/create-user.command';

@Controller('users')
export class UsersController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async getUsers() {
    return this.queryBus.execute(new GetUsersQuery());
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() data: any) {
    return this.commandBus.execute(new CreateUserCommand(data));
  }
}
