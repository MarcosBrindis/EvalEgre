import { NotificationRepository } from '../../domain/port/NotificationRepository';

export class MarkNotificationAsResponded {
  constructor(private repo: NotificationRepository) {}
  async execute(id: number): Promise<void> {
    await this.repo.markAsResponded(id);
  }
}