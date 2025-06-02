import { AnonymousEmailRepository } from '../../domain/port/AnonymousEmailRepository';
import { AnonymousEmail } from '../../domain/model/AnonymousEmail';

export class GetAnonymousEmailById {
  constructor(private repo: AnonymousEmailRepository) {}

  async execute(id: number): Promise<AnonymousEmail | null> {
    return this.repo.findById(id);
  }
}