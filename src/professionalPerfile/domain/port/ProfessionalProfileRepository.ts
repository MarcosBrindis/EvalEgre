import { ProfessionalProfile } from '../model/ProfessionalProfile';

export interface ProfessionalProfileRepository {
  save(profile: Omit<ProfessionalProfile, 'id' | 'creado_en' | 'actualizado_en'>): Promise<ProfessionalProfile>;
  findById(id: number): Promise<ProfessionalProfile | null>;
  findByUserId(userId: number): Promise<ProfessionalProfile | null>;
  findAll(): Promise<ProfessionalProfile[]>;
  update(id: number, data: Partial<ProfessionalProfile>): Promise<void>;
  delete(id: number): Promise<void>;
}