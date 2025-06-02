import { UserRepository } from '../../domain/port/UserRepository';

export class GetAllUsers {
  constructor(private repo: UserRepository) {}

  async execute() {
    return this.repo.findAll();
  }
}