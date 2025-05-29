import { Criterion } from '../../domain/model/Criterion';
import { CriterionRepository } from '../../domain/port/CriterionRepository';

export class CreateCriterion {
  constructor(private criterionRepository: CriterionRepository) {}

  async execute(data: Omit<Criterion, 'id'>): Promise<Criterion> {
    return this.criterionRepository.save(data);
  }
}
