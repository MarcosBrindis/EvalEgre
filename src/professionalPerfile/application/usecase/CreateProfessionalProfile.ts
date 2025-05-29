import { ProfessionalProfile } from '../../domain/model/ProfessionalProfile';
import { ProfessionalProfileRepository } from '../../domain/port/ProfessionalProfileRepository';

export class CreateProfessionalProfile {
  constructor(private repository: ProfessionalProfileRepository) {}

  async execute(data: Omit<ProfessionalProfile, 'id' | 'creado_en' | 'actualizado_en'>): Promise<ProfessionalProfile> {
    return this.repository.save(data);
  }
}