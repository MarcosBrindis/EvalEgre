import { ProjectRepository } from '../../domain/port/ProjectRepository';
import { Project } from '../../domain/model/Project';

export class UpdateProject {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(id: number, data: Partial<Project>): Promise<void> {
    await this.projectRepository.update(id, data);
  }
}