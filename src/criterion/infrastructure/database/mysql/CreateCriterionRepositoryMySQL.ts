import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseCriterionRepository } from './BaseCriterionRepository';
import { Criterion } from '../../../domain/model/Criterion';

export class CreateCriterionRepositoryMySQL extends BaseCriterionRepository {
  async save(data: Omit<Criterion, 'id'>): Promise<Criterion> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO Criterios (nombre, descripcion, peso, competencia_asociada)
       VALUES (?, ?, ?, ?)`,
      [
        data.nombre,
        data.descripcion || null,
        data.peso ?? 1.0,
        data.competencia_asociada || null,
      ]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Criterios WHERE id = ?`,
      [insertId]
    );
    return rows[0];
  }
}