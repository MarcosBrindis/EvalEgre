import { UserRepository } from '../../domain/port/UserRepository';
import { User } from '../../domain/model/User';

export class GetUser {
  constructor(private repo: UserRepository) {}

  async execute(id: number): Promise<User> {
    const user = await this.repo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}