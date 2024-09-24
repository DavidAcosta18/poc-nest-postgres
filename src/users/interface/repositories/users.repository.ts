import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UsersSchema } from '../schemas/users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UsersSchema)
    private readonly repo: Repository<UsersSchema>,
  ) {}

  async create(data: any) {
    return this.repo.save(data);
  }

  async getAll() {
    return await this.repo.find();
  }
}
