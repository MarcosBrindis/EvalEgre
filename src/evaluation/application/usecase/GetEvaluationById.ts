import { EvaluationRepository } from '../../domain/port/EvaluationRepository';
import { Evaluation } from '../../domain/model/Evaluation';

export class GetEvaluationById {
  constructor(private evaluationRepository: EvaluationRepository) {}

  async execute(id: number): Promise<Evaluation | null> {
    return this.evaluationRepository.findById(id);
  }
}