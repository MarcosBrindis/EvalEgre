import { QuestionRepository } from '../../domain/port/QuestionRepository';
import { Question } from '../../domain/model/Question';

export class GetQuestionsBySurvey {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(encuesta_id: number): Promise<Question[]> {
    return this.questionRepository.findBySurveyId(encuesta_id);
  }
}