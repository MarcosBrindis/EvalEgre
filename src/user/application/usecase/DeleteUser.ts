import { UserRepository } from '../../domain/port/UserRepository';

export class DeleteUser {
  constructor(private repo: UserRepository) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}