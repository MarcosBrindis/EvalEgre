import { BaseProjectRepository } from './BaseProjectRepository';
import { Project } from '../../../domain/model/Project';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class GetAllProjectsRepositoryMySQL extends BaseProjectRepository {
  async findAll(): Promise<Project[]> {
    const [rows]: any = await MySQLConnection.execute(`SELECT * FROM Proyectos`);
    return rows;
  }
}