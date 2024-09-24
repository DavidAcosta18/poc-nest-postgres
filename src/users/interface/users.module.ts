import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { GetUsersHandler } from '../application/get-users/get-users.handler';

import { UsersRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersSchema } from './schemas/users.schema';
import { CreateUserHandler } from '../application/create-user/create-user.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([UsersSchema])],
  providers: [UsersRepository, GetUsersHandler, CreateUserHandler],
  controllers: [UsersController],
})
export class UsersModule {}
