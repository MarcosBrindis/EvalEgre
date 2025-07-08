import { EducationalFieldRepository } from '../../../domain/port/EducationalFieldRepository';
import { EducationalField } from '../../../domain/model/EducationalField';

export abstract class BaseEducationalFieldRepository implements EducationalFieldRepository {
  create(_field: Omit<EducationalField, 'id' | 'creado_en' | 'actualizado_en'>): Promise<EducationalField> {
    return Promise.reject(new Error('Method not implemented'));
  }
  update(_id: number, _data: Partial<EducationalField>): Promise<void> {
    return Promise.reject(new Error('Method not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method not implemented'));
  }
  findById(_id: number): Promise<EducationalField | null> {
    return Promise.reject(new Error('Method not implemented'));
  }
  findByNumero(_numero: number): Promise<EducationalField | null> {
    return Promise.reject(new Error('Method not implemented'));
  }
  findAll(): Promise<EducationalField[]> {
    return Promise.reject(new Error('Method not implemented'));
  }
}