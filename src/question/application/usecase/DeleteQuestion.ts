import { QuestionRepository } from '../../domain/port/QuestionRepository';

export class DeleteQuestion {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(questionId: number): Promise<void> {
    return this.questionRepository.delete(questionId);
  }
}