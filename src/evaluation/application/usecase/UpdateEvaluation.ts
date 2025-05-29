import { EvaluationRepository } from '../../domain/port/EvaluationRepository';

export class UpdateEvaluation {
  constructor(private evaluationRepository: EvaluationRepository) {}

  async execute(
    id: number,
    data: Partial<Omit<any, 'id' | 'creado_en' | 'actualizado_en'>>
  ): Promise<void> {
    await this.evaluationRepository.update(id, data);
  }
}