import { ProjectRepository } from '../../../domain/port/ProjectRepository';
import { Project } from '../../../domain/model/Project';

export abstract class BaseProjectRepository implements ProjectRepository {
  save(_project: Omit<Project, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Project> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findById(_id: number): Promise<Project | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  findAll(): Promise<Project[]> {
    return Promise.reject(new Error('Method findAll not implemented'));
  }
  update(_id: number, _data: Partial<Project>): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_id: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}