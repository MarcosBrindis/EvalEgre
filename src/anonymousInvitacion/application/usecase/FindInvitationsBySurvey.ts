import { AnonymousInvitation } from '../../domain/model/AnonymousInvitation';
import { AnonymousInvitationRepository } from '../../domain/port/AnonymousInvitationRepository';

export class FindInvitationsBySurvey {
  constructor(private repo: AnonymousInvitationRepository) {}

  async execute(surveyId: number): Promise<AnonymousInvitation[]> {
    return this.repo.findBySurvey(surveyId);
  }
}