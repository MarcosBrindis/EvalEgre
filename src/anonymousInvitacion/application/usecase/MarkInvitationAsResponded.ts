import { AnonymousInvitationRepository } from '../../domain/port/AnonymousInvitationRepository';

export class MarkInvitationAsResponded {
  constructor(private repo: AnonymousInvitationRepository) {}

  async execute(code: string): Promise<void> {
    await this.repo.markAsResponded(code);
  }
}