import { Evaluation } from '../../domain/model/Evaluation';
import { EvaluationRepository } from '../../domain/port/EvaluationRepository';

export class CreateEvaluation {
  constructor(private evaluationRepository: EvaluationRepository) {}

  async execute(data: Omit<Evaluation, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evaluation> {
    return this.evaluationRepository.save(data);
  }
}