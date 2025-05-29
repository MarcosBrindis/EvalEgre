import { ProjectRepository } from '../../domain/port/ProjectRepository';
import { Project } from '../../domain/model/Project';

export class GetProjectById {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(id: number): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }
}