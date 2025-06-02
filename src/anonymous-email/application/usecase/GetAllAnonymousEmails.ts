import { AnonymousEmailRepository } from '../../domain/port/AnonymousEmailRepository';
import { AnonymousEmail } from '../../domain/model/AnonymousEmail';

export class GetAllAnonymousEmails {
  constructor(private repo: AnonymousEmailRepository) {}

  async execute(): Promise<AnonymousEmail[]> {
    return this.repo.findAll();
  }
}