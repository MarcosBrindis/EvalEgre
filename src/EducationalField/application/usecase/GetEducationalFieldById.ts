import { EducationalFieldRepository } from '../../domain/port/EducationalFieldRepository';
import { EducationalField } from '../../domain/model/EducationalField';

export class GetEducationalFieldById {
  constructor(private repo: EducationalFieldRepository) {}

  async execute(id: number): Promise<EducationalField | null> {
    return this.repo.findById(id);
  }
}