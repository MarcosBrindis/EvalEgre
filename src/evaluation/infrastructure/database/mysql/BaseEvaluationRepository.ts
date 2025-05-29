import { EvaluationRepository } from '../../../domain/port/EvaluationRepository';
import { Evaluation } from '../../../domain/model/Evaluation';

export abstract class BaseEvaluationRepository implements EvaluationRepository {
  save(_evaluation: Omit<Evaluation, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Evaluation> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findById(_id: number): Promise<Evaluation | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  findAll(): Promise<Evaluation[]> {
    return Promise.reject(new Error('Method findAll not implemented'));
  }
  update(_id: number, _data: Partial<Omit<Evaluation, 'id' | 'creado_en' | 'actualizado_en'>>): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}