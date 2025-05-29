import { Evidence } from '../../domain/model/Evidence';
import { EvidenceRepository } from '../../domain/port/EvidenceRepository';

export class GetAllEvidenceByProject {
  constructor(private evidenceRepository: EvidenceRepository) {}

  async execute(projectId: number): Promise<Evidence[]> {
    return this.evidenceRepository.findAllByProject(projectId);
  }
}