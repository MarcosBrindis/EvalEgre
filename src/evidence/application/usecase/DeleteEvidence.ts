import { EvidenceRepository } from '../../domain/port/EvidenceRepository';

export class DeleteEvidence {
  constructor(private evidenceRepository: EvidenceRepository) {}

  async execute(id: number): Promise<void> {
    await this.evidenceRepository.delete(id);
  }
}