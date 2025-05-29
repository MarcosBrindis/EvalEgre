import { ProfessionalProfileRepository } from '../../domain/port/ProfessionalProfileRepository';
import { ProfessionalProfile } from '../../domain/model/ProfessionalProfile';

export class GetProfessionalProfileById {
  constructor(private repository: ProfessionalProfileRepository) {}

  async execute(id: number): Promise<ProfessionalProfile | null> {
    return this.repository.findById(id);
  }
}