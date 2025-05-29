import { Evidence } from '../model/Evidence';

export interface EvidenceRepository {
  save(evidence: Omit<Evidence, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evidence>;
  findById(id: number): Promise<Evidence | null>;
  findAllByProject(projectId: number): Promise<Evidence[]>;
  update(id: number, data: Partial<Evidence>): Promise<void>;
  delete(id: number): Promise<void>;
}