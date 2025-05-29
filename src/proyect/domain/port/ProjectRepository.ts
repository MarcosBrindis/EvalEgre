import { Project } from '../model/Project';

export interface ProjectRepository {
  save(project: Omit<Project, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Project>;
  findById(id: number): Promise<Project | null>;
  findAll(): Promise<Project[]>;
  update(id: number, data: Partial<Project>): Promise<void>;
  delete(id: number): Promise<void>;
}