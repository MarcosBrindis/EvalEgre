import { EvidenceRepository } from '../../../domain/port/EvidenceRepository';
import { Evidence } from '../../../domain/model/Evidence';

export abstract class BaseEvidenceRepository implements EvidenceRepository {
  save(_evidence: Omit<Evidence, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evidence> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findById(_id: number): Promise<Evidence | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  findAllByProject(_projectId: number): Promise<Evidence[]> {
    return Promise.reject(new Error('Method findAllByProject not implemented'));
  }
  update(_id: number, _data: Partial<Evidence>): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}