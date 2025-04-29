import { QuestionRepository } from '../../domain/port/QuestionRepository';
import { Question } from '../../domain/model/Question';
import { OptionQuestion } from '../../domain/model/OptionQuestion';

export class UpdateQuestion {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(question: Question, options?: OptionQuestion[]): Promise<void> {
    return this.questionRepository.update(question, options);
  }
}