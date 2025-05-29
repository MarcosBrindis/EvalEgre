import { CriterionRepository } from '../../domain/port/CriterionRepository';

export class DeleteCriterion {
  constructor(private criterionRepository: CriterionRepository) {}

  async execute(id: number): Promise<void> {
    await this.criterionRepository.delete(id);
  }
}