import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseProfessionalProfileRepository } from './BaseProfessionalProfileRepository';
import { ProfessionalProfile } from '../../../domain/model/ProfessionalProfile';

export class UpdateProfessionalProfileRepositoryMySQL extends BaseProfessionalProfileRepository {
  async update(userId: number, data: Partial<ProfessionalProfile>): Promise<void> {
 
    const values: any[] = [];
    const fields: string[] = [];
    if (data.resumen !== undefined) {
      fields.push('resumen = ?');
      values.push(data.resumen);
    }
    if (data.formacion !== undefined) {
      fields.push('formacion = ?');
      values.push(JSON.stringify(data.formacion));
    }
    if (data.experiencias !== undefined) {
      fields.push('experiencias = ?');
      values.push(JSON.stringify(data.experiencias));
    }
    if (data.competencias !== undefined) {
      fields.push('competencias = ?');
      values.push(JSON.stringify(data.competencias));
    }
    if (data.linkedin_url !== undefined) {
      fields.push('linkedin_url = ?');
      values.push(data.linkedin_url);
    }
    if (fields.length === 0) return;
    await MySQLConnection.execute(
      `UPDATE PerfilProfesional
         SET ${fields.join(', ')}, actualizado_en = CURRENT_TIMESTAMP
       WHERE usuario_id = ?`,
      [...values, userId]
    );
  }
}