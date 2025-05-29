import { CreateProject } from '../application/usecase/CreateProject';
import { DeleteProject } from '../application/usecase/DeleteProject';
import { GetAllProjects } from '../application/usecase/GetAllProjects';
import { GetProjectById } from '../application/usecase/GetProject';
import { UpdateProject } from '../application/usecase/UpdateProject';

import { CreateProjectRepositoryMySQL } from './database/mysql/CreateProjectRepositoryMySQL';
import { DeleteProjectRepositoryMySQL } from './database/mysql/DeleteProjectRepositoryMySQL';
import { GetAllProjectsRepositoryMySQL } from './database/mysql/GetAllProjectsRepositoryMySQL';
import { FindProjectByIdRepositoryMySQL } from './database/mysql/FindProjectByIdRepositoryMySQL';
import { UpdateProjectRepositoryMySQL } from './database/mysql/UpdateProjectRepositoryMySQL';

// Instancia repositorios
const createProjectRepository = new CreateProjectRepositoryMySQL();
const deleteProjectRepository = new DeleteProjectRepositoryMySQL();
const getAllProjectsRepository = new GetAllProjectsRepositoryMySQL();
const findProjectByIdRepository = new FindProjectByIdRepositoryMySQL();
const updateProjectRepository = new UpdateProjectRepositoryMySQL();

// Instancia casos de uso
export const dependencies = {
  createProject: new CreateProject(createProjectRepository),
  deleteProject: new DeleteProject(deleteProjectRepository),
  getAllProjects: new GetAllProjects(getAllProjectsRepository),
  getProjectById: new GetProjectById(findProjectByIdRepository),
  updateProject: new UpdateProject(updateProjectRepository),
};