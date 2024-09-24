export class CreateUserCommand {
  readonly name: string;
  readonly lastName: string;
  readonly email: string;

  constructor(readonly data: CreateUserCommand) {
    Object.assign(this, data);
  }
}
