import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseProjectRepository } from './BaseProjectRepository';
import { Project } from '../../../domain/model/Project';

export class CreateProjectRepositoryMySQL extends BaseProjectRepository {
  async save(data: Omit<Project, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Project> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Proyectos (egresado_id, titulo, descripcion, estado)
       VALUES (?, ?, ?, ?)`,
      [
        data.egresado_id,
        data.titulo,
        data.descripcion || null,
        data.estado || 'en_revision'
      ]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Proyectos WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
}