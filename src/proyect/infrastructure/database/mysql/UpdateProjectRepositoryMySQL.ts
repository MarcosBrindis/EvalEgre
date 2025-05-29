import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseProjectRepository } from './BaseProjectRepository';
import { Project } from '../../../domain/model/Project';

export class UpdateProjectRepositoryMySQL extends BaseProjectRepository {
  async update(id: number, data: Partial<Project>): Promise<void> {
    const fields = Object.keys(data)
      .map(key => `\`${key}\` = ?`)
      .join(', ');
    const values = Object.values(data);
    await MySQLConnection.execute(
      `UPDATE Proyectos
         SET ${fields}, actualizado_en = CURRENT_TIMESTAMP
       WHERE id = ?`,
      [...values, id]
    );
  }
}