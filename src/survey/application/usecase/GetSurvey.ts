import { SurveyRepository } from '../../domain/port/SurveyRepository';
import { Survey } from '../../domain/model/Survey';

export class GetSurveyById {
  constructor(private surveyRepository: SurveyRepository) {}

  async execute(id: number): Promise<Survey | null> {
    return this.surveyRepository.findById(id);
  }
}