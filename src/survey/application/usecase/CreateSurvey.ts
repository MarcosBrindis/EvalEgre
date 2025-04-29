import { Survey } from '../../domain/model/Survey';
import { SurveyRepository } from '../../domain/port/SurveyRepository';

export class CreateSurvey {
  constructor(private surveyRepository: SurveyRepository) {}

  async execute(data: Omit<Survey, 'id' | 'creado_en' | 'actualizado_en' | 'creado_por'>, userId: number): Promise<Survey> {
    const surveyWithCreator = {
      ...data,
      creado_por: userId, 
    };
    return this.surveyRepository.save(surveyWithCreator);
  }
}