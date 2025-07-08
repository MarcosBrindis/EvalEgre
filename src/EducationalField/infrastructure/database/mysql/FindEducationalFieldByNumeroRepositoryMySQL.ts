import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseEducationalFieldRepository } from './BaseEducationalFieldRepository';
import { EducationalField } from '../../../domain/model/EducationalField';

export class FindEducationalFieldByNumeroRepositoryMySQL extends BaseEducationalFieldRepository {
  async findByNumero(numero: number): Promise<EducationalField | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM CamposEducacionales WHERE numero = ?`,
      [numero]
    );
    return rows.length > 0 ? rows[0] : null;
  }
}
