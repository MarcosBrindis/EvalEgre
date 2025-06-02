import { NotificationRepository } from '../../domain/port/NotificationRepository';

export class MarkNotificationAsRead {
  constructor(private repo: NotificationRepository) {}
  async execute(id: number): Promise<void> {
    await this.repo.markAsRead(id);
  }
}