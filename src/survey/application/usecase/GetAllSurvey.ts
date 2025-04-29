import { Survey } from '../../domain/model/Survey';
import { SurveyRepository } from '../../domain/port/SurveyRepository';

export class GetAllSurveys {
  constructor(private surveyRepository: SurveyRepository) {}

  async execute(): Promise<Survey[]> {
    return this.surveyRepository.findAll();
  }
}