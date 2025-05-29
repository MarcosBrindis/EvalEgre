import { EvaluationRepository } from '../../domain/port/EvaluationRepository';

export class DeleteEvaluation {
  constructor(private evaluationRepository: EvaluationRepository) {}

  async execute(id: number): Promise<void> {
    await this.evaluationRepository.delete(id);
  }
}