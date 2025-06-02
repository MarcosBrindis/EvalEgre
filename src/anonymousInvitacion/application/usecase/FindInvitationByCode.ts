import { AnonymousInvitation } from '../../domain/model/AnonymousInvitation';
import { AnonymousInvitationRepository } from '../../domain/port/AnonymousInvitationRepository';

export class FindInvitationByCode {
  constructor(private repo: AnonymousInvitationRepository) {}

  async execute(code: string): Promise<AnonymousInvitation | null> {
    return this.repo.findByCode(code);
  }
}