import { BaseQuestionRepository } from './BaseQuestionRepository';
import { Question } from '../../../domain/model/Question';
import { OptionQuestion } from '../../../domain/model/OptionQuestion';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class CreateQuestionRepositoryMySQL extends BaseQuestionRepository {
  async save(question: Question, options: OptionQuestion[] = []): Promise<Question> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Preguntas (encuesta_id, tipo, texto, orden, competencia_asociada)
       VALUES (?, ?, ?, ?, ?)`,
      [question.encuesta_id, question.tipo, question.texto, question.orden, question.competencia_asociada || null]
    );

    const questionId = result.insertId;

    if (options.length > 0) {
      const optionPromises = options.map((option) =>
        MySQLConnection.execute(
          `INSERT INTO OpcionesPregunta (pregunta_id, valor, etiqueta, peso)
           VALUES (?, ?, ?, ?)`,
          [questionId, option.valor, option.etiqueta, option.peso || 1]
        )
      );
      await Promise.all(optionPromises);
    }

    return { ...question, id: questionId };
  }
}