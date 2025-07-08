import { BaseQuestionRepository } from './BaseQuestionRepository';
import { Question } from '../../../domain/model/Question';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class GetQuestionByIdRepositoryMySQL extends BaseQuestionRepository {
  async findById(questionId: number): Promise<Question | null> {
    const [questions]: any = await MySQLConnection.execute(
      `SELECT * FROM Preguntas WHERE id = ?`,
      [questionId]
    );

    if (questions.length === 0) {
      return null;
    }

    const question = questions[0];

    const [options]: any = await MySQLConnection.execute(
      `SELECT * FROM OpcionesPregunta WHERE pregunta_id = ?`,
      [questionId]
    );

    return {
      id: question.id,
      encuesta_id: question.encuesta_id,
      tipo: question.tipo,
      texto: question.texto,
      orden: question.orden,
      competencia_asociada: question.competencia_asociada,
      campo_educacional_numero: question.campo_educacional_numero || undefined,
      opciones: options.map((o: any) => ({
        id: o.id,
        pregunta_id: o.pregunta_id,
        valor: o.valor,
        etiqueta: o.etiqueta,
        peso: o.peso,
      })),
    };
  }
}