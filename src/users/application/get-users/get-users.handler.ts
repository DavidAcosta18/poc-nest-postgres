import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

import { GetUsersQuery } from './get-users.query';
import { UsersRepository } from 'src/users/interface/repositories/users.repository';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute() {
    return this.usersRepository.getAll();
  }
}
