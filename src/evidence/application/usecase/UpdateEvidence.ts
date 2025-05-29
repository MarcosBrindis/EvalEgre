import { EvidenceRepository } from '../../domain/port/EvidenceRepository';
import { Evidence } from '../../domain/model/Evidence';

export class UpdateEvidence {
  constructor(private evidenceRepository: EvidenceRepository) {}

  async execute(id: number, data: Partial<Evidence>): Promise<void> {
    await this.evidenceRepository.update(id, data);
  }
}