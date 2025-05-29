import { EvidenceType } from '../model/EvidenceType';

export interface EvidenceTypeRepository {
  findAll(): Promise<EvidenceType[]>;
  findById(id: number): Promise<EvidenceType | null>;
}