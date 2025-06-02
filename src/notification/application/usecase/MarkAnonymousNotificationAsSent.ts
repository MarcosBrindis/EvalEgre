import { AnonymousNotificationRepository } from '../../domain/port/AnonymousNotificationRepository';

export class MarkAnonymousNotificationAsSent {
  constructor(private repo: AnonymousNotificationRepository) {}
  async execute(id: number): Promise<void> {
    await this.repo.markAsSent(id);
  }
}