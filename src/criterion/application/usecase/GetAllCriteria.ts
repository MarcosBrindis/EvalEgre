import { Criterion } from '../../domain/model/Criterion';
import { CriterionRepository } from '../../domain/port/CriterionRepository';

export class GetAllCriteria {
  constructor(private criterionRepository: CriterionRepository) {}

  async execute(): Promise<Criterion[]> {
    return this.criterionRepository.findAll();
  }
}