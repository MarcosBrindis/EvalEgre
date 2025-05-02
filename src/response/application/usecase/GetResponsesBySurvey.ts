import { ResponseRepository } from '../../domain/port/ResponseRepository';
import { Response } from '../../domain/model/Response';

export class GetResponsesBySurvey {
  constructor(private responseRepository: ResponseRepository) {}

  async execute(encuesta_id: number): Promise<Response[]> {
    return this.responseRepository.findBySurveyId(encuesta_id);
  }
}