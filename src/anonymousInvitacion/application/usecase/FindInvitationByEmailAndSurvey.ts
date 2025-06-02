import { AnonymousInvitationRepository } from '../../domain/port/AnonymousInvitationRepository';

export class FindInvitationByEmailAndSurvey {
  constructor(private repo: AnonymousInvitationRepository) {}

  async execute(email: string, encuesta_id: number) {
    return this.repo.findByEmailAndSurvey(email, encuesta_id);
  }
}