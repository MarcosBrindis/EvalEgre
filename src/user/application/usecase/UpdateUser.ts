import { UserRepository } from '../../domain/port/UserRepository';

export class UpdateUser {
  constructor(private repo: UserRepository) {}

  async execute(id: number, data: Partial<Record<keyof import('../../domain/model/User').User, any>>): Promise<void> {
    await this.repo.update(id, data);
  }
}