import { ProfessionalProfileRepository } from '../../../domain/port/ProfessionalProfileRepository';
import { ProfessionalProfile } from '../../../domain/model/ProfessionalProfile';

export abstract class BaseProfessionalProfileRepository implements ProfessionalProfileRepository {
  save(_profile: Omit<ProfessionalProfile, 'id' | 'creado_en' | 'actualizado_en'>): Promise<ProfessionalProfile> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findById(_id: number): Promise<ProfessionalProfile | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  findByUserId(_userId: number): Promise<ProfessionalProfile | null> {
    return Promise.reject(new Error('Method findByUserId not implemented'));
  }
  findAll(): Promise<ProfessionalProfile[]> {
    return Promise.reject(new Error('Method findAll not implemented'));
  }
  update(_id: number, _data: Partial<ProfessionalProfile>): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}