import { EducationalFieldRepository } from '../../domain/port/EducationalFieldRepository';

export class DeleteEducationalField {
  constructor(private repo: EducationalFieldRepository) {}

  async execute(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}