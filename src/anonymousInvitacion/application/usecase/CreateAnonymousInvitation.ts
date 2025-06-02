import { AnonymousInvitation } from '../../domain/model/AnonymousInvitation';
import { AnonymousInvitationRepository } from '../../domain/port/AnonymousInvitationRepository';

export class CreateAnonymousInvitation {
  constructor(private repo: AnonymousInvitationRepository) {}

  async execute(data: Omit<AnonymousInvitation, 'id' | 'creado_en' | 'respondido' | 'respondido_en'>): Promise<AnonymousInvitation> {
    return this.repo.create(data);
  }
}