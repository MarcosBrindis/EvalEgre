import { ProfessionalProfile } from '../../domain/model/ProfessionalProfile';
import { ProfessionalProfileRepository } from '../../domain/port/ProfessionalProfileRepository';

export class GetAllProfessionalProfiles {
  constructor(private repository: ProfessionalProfileRepository) {}

  async execute(): Promise<ProfessionalProfile[]> {
    return this.repository.findAll();
  }
}