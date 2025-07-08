import { BaseQuestionRepository } from './BaseQuestionRepository';
import { Question } from '../../../domain/model/Question';
import { OptionQuestion } from '../../../domain/model/OptionQuestion';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class UpdateQuestionRepositoryMySQL extends BaseQuestionRepository {
  async update(question: Question, options: OptionQuestion[] = []): Promise<void> {
    await MySQLConnection.execute(
      `UPDATE Preguntas SET tipo = ?, texto = ?, orden = ?, competencia_asociada = ?, campo_educacional_numero = ?
       WHERE id = ?`,
      [
        question.tipo, 
        question.texto, 
        question.orden, 
        question.competencia_asociada || null, 
        question.campo_educacional_numero ?? 0,
        question.id
      ]
    );

    // Eliminar opciones existentes
    await MySQLConnection.execute(`DELETE FROM OpcionesPregunta WHERE pregunta_id = ?`, [question.id]);

    // Insertar nuevas opciones
    const optionPromises = options.map((option) =>
      MySQLConnection.execute(
        `INSERT INTO OpcionesPregunta (pregunta_id, valor, etiqueta, peso)
         VALUES (?, ?, ?, ?)`,
        [question.id, option.valor, option.etiqueta, option.peso || 1]
      )
    );
    await Promise.all(optionPromises);
  }
}