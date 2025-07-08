import { EducationalFieldRepository } from '../../domain/port/EducationalFieldRepository';
import { EducationalField } from '../../domain/model/EducationalField';

export class GetEducationalFieldByNumero {
  constructor(private repo: EducationalFieldRepository) {}

  async execute(numero: number): Promise<EducationalField | null> {
    if (numero < 0 || numero > 9) {
      throw new Error('El número debe estar entre 0 y 9');
    }
    
    return this.repo.findByNumero(numero);
  }
}
