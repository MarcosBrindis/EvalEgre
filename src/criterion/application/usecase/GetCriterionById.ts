import { CriterionRepository } from '../../domain/port/CriterionRepository';
import { Criterion } from '../../domain/model/Criterion';

export class GetCriterionById {
  constructor(private criterionRepository: CriterionRepository) {}

  async execute(id: number): Promise<Criterion | null> {
    return this.criterionRepository.findById(id);
  }
}