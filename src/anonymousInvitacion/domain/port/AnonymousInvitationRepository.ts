import { AnonymousInvitation } from '../model/AnonymousInvitation';

export interface AnonymousInvitationRepository {
  create(invitation: Omit<AnonymousInvitation, 'id' | 'creado_en' | 'respondido' | 'respondido_en'>): Promise<AnonymousInvitation>;
  findByCode(code: string): Promise<AnonymousInvitation | null>;
  findBySurvey(surveyId: number): Promise<AnonymousInvitation[]>;
  markAsResponded(code: string): Promise<void>;
   findByEmailAndSurvey(email: string, encuesta_id: number): Promise<AnonymousInvitation | null>;
}