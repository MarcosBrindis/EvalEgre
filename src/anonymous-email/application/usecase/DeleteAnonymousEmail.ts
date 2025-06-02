import { AnonymousEmailRepository } from '../../domain/port/AnonymousEmailRepository';

export class DeleteAnonymousEmail {
  constructor(private repo: AnonymousEmailRepository) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}