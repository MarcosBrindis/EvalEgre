import { BaseProfessionalProfileRepository } from './BaseProfessionalProfileRepository';
import { ProfessionalProfile } from '../../../domain/model/ProfessionalProfile';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class FindProfessionalProfileByUserIdRepositoryMySQL extends BaseProfessionalProfileRepository {
  async findByUserId(userId: number): Promise<ProfessionalProfile | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM PerfilProfesional WHERE usuario_id = ?`,
      [userId]
    );
    if (rows.length === 0) return null;
    const row = rows[0];
    return {
      ...row,
      formacion: typeof row.formacion === 'string' ? JSON.parse(row.formacion) : row.formacion,
      experiencias: typeof row.experiencias === 'string' ? JSON.parse(row.experiencias) : row.experiencias,
      competencias: typeof row.competencias === 'string' ? JSON.parse(row.competencias) : row.competencias
    };
  }
}