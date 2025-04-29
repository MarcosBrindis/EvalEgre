import { SurveyRepository } from '../../domain/port/SurveyRepository';
import { Survey } from '../../domain/model/Survey';

export class UpdateSurvey {
  constructor(private surveyRepository: SurveyRepository) {}

  async execute(id: number, data: Partial<Survey>): Promise<void> {
    await this.surveyRepository.update(id, data);
  }
}