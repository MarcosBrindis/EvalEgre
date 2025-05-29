import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseProjectRepository } from './BaseProjectRepository';

export class DeleteProjectRepositoryMySQL extends BaseProjectRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM Proyectos WHERE id = ?`,
      [id]
    );
  }
}