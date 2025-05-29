import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseProfessionalProfileRepository } from './BaseProfessionalProfileRepository';
import { ProfessionalProfile } from '../../../domain/model/ProfessionalProfile';

export class CreateProfessionalProfileRepositoryMySQL extends BaseProfessionalProfileRepository {
  async save(data: Omit<ProfessionalProfile, 'id' | 'creado_en' | 'actualizado_en'>): Promise<ProfessionalProfile> {
    const [result]: any = await MySQLConnection.execute(
      `INSERT INTO PerfilProfesional (usuario_id, resumen, formacion, experiencias, competencias, linkedin_url)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        data.usuario_id,
        data.resumen || null,
        JSON.stringify(data.formacion || []),
        JSON.stringify(data.experiencias || []),
        JSON.stringify(data.competencias || []),
        data.linkedin_url || null
      ]
    );
    const insertId = (result as any).insertId;
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM PerfilProfesional WHERE id = ?`,
      [insertId]
    );
    const row = rows[0];
    return {
      ...row,
      formacion: typeof row.formacion === 'string' ? JSON.parse(row.formacion) : row.formacion,
      experiencias: typeof row.experiencias === 'string' ? JSON.parse(row.experiencias) : row.experiencias,
      competencias: typeof row.competencias === 'string' ? JSON.parse(row.competencias) : row.competencias
    };
  }
}