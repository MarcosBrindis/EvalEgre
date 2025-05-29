import { BaseProfessionalProfileRepository } from './BaseProfessionalProfileRepository';
import { ProfessionalProfile } from '../../../domain/model/ProfessionalProfile';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class GetAllProfessionalProfilesRepositoryMySQL extends BaseProfessionalProfileRepository {
  async findAll(): Promise<ProfessionalProfile[]> {
    const [rows]: any = await MySQLConnection.execute(`SELECT * FROM PerfilProfesional`);
    return rows.map((row: any) => ({
      ...row,
      formacion: typeof row.formacion === 'string' ? JSON.parse(row.formacion) : row.formacion,
      experiencias: typeof row.experiencias === 'string' ? JSON.parse(row.experiencias) : row.experiencias,
      competencias: typeof row.competencias === 'string' ? JSON.parse(row.competencias) : row.competencias
    }));
  }
}