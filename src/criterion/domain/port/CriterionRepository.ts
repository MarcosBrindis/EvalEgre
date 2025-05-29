import { Criterion } from '../model/Criterion';

export interface CriterionRepository {
  save(criterion: Omit<Criterion, 'id'>): Promise<Criterion>;
  findById(id: number): Promise<Criterion | null>;
  findAll(): Promise<Criterion[]>;
  update(id: number, data: Partial<Criterion>): Promise<void>;
  delete(id: number): Promise<void>;
}