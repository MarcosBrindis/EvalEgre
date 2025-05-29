import { Evidence } from '../../domain/model/Evidence';
import { EvidenceRepository } from '../../domain/port/EvidenceRepository';

export class CreateEvidence {
  constructor(private evidenceRepository: EvidenceRepository) {}

  async execute(data: Omit<Evidence, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evidence> {
    return this.evidenceRepository.save(data);
  }
}