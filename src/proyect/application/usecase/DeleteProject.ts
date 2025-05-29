import { ProjectRepository } from '../../domain/port/ProjectRepository';

export class DeleteProject {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}