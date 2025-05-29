import { Evaluation } from '../../domain/model/Evaluation';
import { EvaluationRepository } from '../../domain/port/EvaluationRepository';

export class GetAllEvaluations {
  constructor(private evaluationRepository: EvaluationRepository) {}

  async execute(): Promise<Evaluation[]> {
    return this.evaluationRepository.findAll();
  }
}