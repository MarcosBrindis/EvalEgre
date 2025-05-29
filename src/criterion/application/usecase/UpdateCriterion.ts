import { CriterionRepository } from '../../domain/port/CriterionRepository';

export class UpdateCriterion {
  constructor(private criterionRepository: CriterionRepository) {}

  async execute(id: number, data: Partial<any>): Promise<void> {
    await this.criterionRepository.update(id, data);
  }
}