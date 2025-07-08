import { QuestionRepository } from '../../domain/port/QuestionRepository';
import { Question } from '../../domain/model/Question';
import { OptionQuestion } from '../../domain/model/OptionQuestion';

export class UpdateQuestion {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(question: Question, options?: OptionQuestion[]): Promise<void> {
    // Validar campo educacional si está presente
    if (question.campo_educacional_numero !== undefined && 
        (question.campo_educacional_numero < 0 || question.campo_educacional_numero > 9)) {
      throw new Error('El campo educacional debe estar entre 0 y 9');
    }

    return this.questionRepository.update(question, options);
  }
}