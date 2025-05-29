import { CronNotificationService } from '../../../core/service/CronNotificationService';

export class SurveyNotificationService {
  static initialize() {
    CronNotificationService.start();
  }
}