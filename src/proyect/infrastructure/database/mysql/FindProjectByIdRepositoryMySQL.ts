import { BaseProjectRepository } from './BaseProjectRepository';
import { Project } from '../../../domain/model/Project';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class FindProjectByIdRepositoryMySQL extends BaseProjectRepository {
  async findById(id: number): Promise<Project | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Proyectos WHERE id = ?`,
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}