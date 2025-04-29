import { SurveyRepository } from '../../domain/port/SurveyRepository';

export class DeleteSurvey {
  constructor(private surveyRepository: SurveyRepository) {}

  async execute(id: number): Promise<void> {
    await this.surveyRepository.delete(id);
  }
}