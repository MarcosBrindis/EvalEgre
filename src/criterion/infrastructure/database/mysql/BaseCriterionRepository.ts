import { CriterionRepository } from '../../../domain/port/CriterionRepository';
import { Criterion } from '../../../domain/model/Criterion';

export abstract class BaseCriterionRepository implements CriterionRepository {
  save(_criterion: Omit<Criterion, 'id'>): Promise<Criterion> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findById(_id: number): Promise<Criterion | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  findAll(): Promise<Criterion[]> {
    return Promise.reject(new Error('Method findAll not implemented'));
  }
  update(_id: number, _data: Partial<Criterion>): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}