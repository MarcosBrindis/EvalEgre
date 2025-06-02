import { AnonymousNotification } from '../../domain/model/AnonymousNotification';
import { AnonymousNotificationRepository } from '../../domain/port/AnonymousNotificationRepository';

export class CreateAnonymousNotification {
  constructor(private repo: AnonymousNotificationRepository) {}
  async execute(data: Omit<AnonymousNotification, 'id' | 'enviada_en' | 'enviada'>): Promise<AnonymousNotification> {
    return this.repo.create(data);
  }
}