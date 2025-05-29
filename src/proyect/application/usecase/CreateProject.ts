import { Project } from '../../domain/model/Project';
import { ProjectRepository } from '../../domain/port/ProjectRepository';

export class CreateProject {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(data: Omit<Project, 'id' | 'creado_en' | 'actualizado_en'>): Promise<Project> {
    return this.projectRepository.save(data);
  }
}