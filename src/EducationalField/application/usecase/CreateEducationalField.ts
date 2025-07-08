import { EducationalField } from '../../domain/model/EducationalField';
import { EducationalFieldRepository } from '../../domain/port/EducationalFieldRepository';

export class CreateEducationalField {
  constructor(private repo: EducationalFieldRepository) {}

  async execute(data: { numero: number; nombre: string; descripcion?: string }): Promise<EducationalField> {
    // Validar que el número esté en rango
    if (data.numero < 0 || data.numero > 9) {
      throw new Error('El número debe estar entre 0 y 9');
    }

    // Validar que el número no exista
    const existing = await this.repo.findByNumero(data.numero);
    if (existing) {
      throw new Error(`Ya existe un campo educacional con el número ${data.numero}`);
    }

    return this.repo.create({
      numero: data.numero,
      nombre: data.nombre.trim(),
      descripcion: data.descripcion?.trim() || undefined,
      is_active: true
    });
  }
}