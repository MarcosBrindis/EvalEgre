import { ProfessionalProfileRepository } from '../../domain/port/ProfessionalProfileRepository';

export class DeleteProfessionalProfile {
  constructor(private repository: ProfessionalProfileRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}