import { Project } from '../../domain/model/Project';
import { ProjectRepository } from '../../domain/port/ProjectRepository';

export class GetAllProjects {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }
}