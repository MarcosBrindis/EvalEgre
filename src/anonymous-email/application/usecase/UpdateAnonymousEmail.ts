import { AnonymousEmailRepository } from '../../domain/port/AnonymousEmailRepository';
import { AnonymousEmail } from '../../domain/model/AnonymousEmail';

export class UpdateAnonymousEmail {
  constructor(private repo: AnonymousEmailRepository) {}

  async execute(id: number, data: Partial<AnonymousEmail>): Promise<void> {
    await this.repo.update(id, data);
  }
}