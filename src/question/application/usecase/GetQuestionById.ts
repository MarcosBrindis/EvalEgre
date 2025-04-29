import { QuestionRepository } from '../../domain/port/QuestionRepository';
import { Question } from '../../domain/model/Question';

export class GetQuestionById {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(questionId: number): Promise<Question | null> {
    return this.questionRepository.findById(questionId);
  }
}