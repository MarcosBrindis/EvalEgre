import { ProfessionalProfileRepository } from '../../domain/port/ProfessionalProfileRepository';
import { ProfessionalProfile } from '../../domain/model/ProfessionalProfile';

export class GetProfessionalProfileByUserId {
  constructor(private repository: ProfessionalProfileRepository) {}

  async execute(userId: number): Promise<ProfessionalProfile | null> {
    return this.repository.findByUserId(userId);
  }
}