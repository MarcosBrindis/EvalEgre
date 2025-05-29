import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseProfessionalProfileRepository } from './BaseProfessionalProfileRepository';

export class DeleteProfessionalProfileRepositoryMySQL extends BaseProfessionalProfileRepository {
  async delete(id: number): Promise<void> {
    await MySQLConnection.execute(
      `DELETE FROM PerfilProfesional WHERE id = ?`,
      [id]
    );
  }
}