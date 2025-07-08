import { EducationalFieldRepository } from '../../domain/port/EducationalFieldRepository';
import { EducationalField } from '../../domain/model/EducationalField';

export class GetAllEducationalFields {
  constructor(private repo: EducationalFieldRepository) {}

  async execute(): Promise<EducationalField[]> {
    return this.repo.findAll();
  }
}