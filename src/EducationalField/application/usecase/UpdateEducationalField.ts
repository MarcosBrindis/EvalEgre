import { EducationalFieldRepository } from '../../domain/port/EducationalFieldRepository';
import { EducationalField } from '../../domain/model/EducationalField';

export class UpdateEducationalField {
  constructor(private repo: EducationalFieldRepository) {}

  async execute(id: number, data: Partial<EducationalField>): Promise<void> {
    // Validate numero if provided (0-9)
    if (data.numero !== undefined && (data.numero < 0 || data.numero > 9)) {
      throw new Error('El número debe estar entre 0 y 9');
    }

    // If numero is being updated, check for uniqueness
    if (data.numero !== undefined) {
      const existingByNumero = await this.repo.findByNumero(data.numero);
      if (existingByNumero && existingByNumero.id !== id) {
        throw new Error('Ya existe un campo educacional con este número');
      }
    }

    await this.repo.update(id, data);
  }
}