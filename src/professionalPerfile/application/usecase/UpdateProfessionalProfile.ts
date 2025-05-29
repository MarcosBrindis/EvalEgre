import { ProfessionalProfileRepository } from '../../domain/port/ProfessionalProfileRepository';

export class UpdateProfessionalProfile {
  constructor(private repository: ProfessionalProfileRepository) {}

  async execute(id: number, data: Partial<any>): Promise<void> {
    await this.repository.update(id, data);
  }
}