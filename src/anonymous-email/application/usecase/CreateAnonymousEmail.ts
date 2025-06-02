import { AnonymousEmail } from '../../domain/model/AnonymousEmail';
import { AnonymousEmailRepository } from '../../domain/port/AnonymousEmailRepository';

export class CreateAnonymousEmail {
  constructor(private repo: AnonymousEmailRepository) {}

  async execute(data: Omit<AnonymousEmail, 'id' | 'creado_en' | 'actualizado_en'>): Promise<AnonymousEmail> {
    return this.repo.create(data);
  }
}