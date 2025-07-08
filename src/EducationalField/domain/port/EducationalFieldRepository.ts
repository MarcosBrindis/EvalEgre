import { EducationalField } from '../model/EducationalField';

export interface EducationalFieldRepository {
  create(field: Omit<EducationalField, 'id' | 'creado_en' | 'actualizado_en'>): Promise<EducationalField>;
  update(id: number, data: Partial<EducationalField>): Promise<void>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<EducationalField | null>;
  findByNumero(numero: number): Promise<EducationalField | null>;
  findAll(): Promise<EducationalField[]>;
}