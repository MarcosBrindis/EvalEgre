import { BaseQuestionRepository } from './BaseQuestionRepository';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class DeleteQuestionRepositoryMySQL extends BaseQuestionRepository {
  async delete(questionId: number): Promise<void> {
    await MySQLConnection.execute(`DELETE FROM Preguntas WHERE id = ?`, [questionId]);
  }
}