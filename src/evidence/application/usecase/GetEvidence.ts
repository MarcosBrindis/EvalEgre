import { Evidence } from '../../domain/model/Evidence';
import { EvidenceRepository } from '../../domain/port/EvidenceRepository';

export class GetEvidenceById {
  constructor(private evidenceRepository: EvidenceRepository) {}

  async execute(id: number): Promise<Evidence | null> {
    return this.evidenceRepository.findById(id);
  }
}