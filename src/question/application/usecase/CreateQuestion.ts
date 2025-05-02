import { QuestionRepository } from '../../domain/port/QuestionRepository';
import { Question } from '../../domain/model/Question';
import { OptionQuestion } from '../../domain/model/OptionQuestion';

export class CreateQuestion {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(question: Question, options?: OptionQuestion[]): Promise<Question> {
    return this.questionRepository.save(question, options);
  }
}