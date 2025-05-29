import { EvidenceType } from '../../domain/model/EvidenceType';
import { EvidenceTypeRepository } from '../../domain/port/EvidenceTypeRepository';

export class GetAllEvidenceTypes {
  constructor(private evidenceTypeRepository: EvidenceTypeRepository) {}

  async execute(): Promise<EvidenceType[]> {
    return this.evidenceTypeRepository.findAll();
  }
}