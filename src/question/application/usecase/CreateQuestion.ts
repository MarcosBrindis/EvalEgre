import { QuestionRepository } from '../../domain/port/QuestionRepository';
import { Question } from '../../domain/model/Question';
import { OptionQuestion } from '../../domain/model/OptionQuestion';

export class CreateQuestion {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(question: Question, options?: OptionQuestion[]): Promise<Question> {
    // Validar campo educacional
    if (question.campo_educacional_numero !== undefined) {
      if (question.campo_educacional_numero < 0 || question.campo_educacional_numero > 9) {
        throw new Error('El campo educacional debe estar entre 0 y 9');
      }
    } else {
      // Asignar valor por defecto
      question.campo_educacional_numero = 0;
    }

    try {
      return await this.questionRepository.save(question, options);
    } catch (error: any) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        throw new Error(`El campo educacional ${question.campo_educacional_numero} no existe. Verifique que el número esté creado en CamposEducacionales. Use numero 0 para 'Ninguno' o cree el campo primero.`);
      }
      throw error;
    }
  }
}