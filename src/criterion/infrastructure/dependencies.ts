import { CreateCriterion } from '../application/usecase/CreateCriterion';
import { DeleteCriterion } from '../application/usecase/DeleteCriterion';
import { GetAllCriteria } from '../application/usecase/GetAllCriteria';
import { GetCriterionById } from '../application/usecase/GetCriterionById';
import { UpdateCriterion } from '../application/usecase/UpdateCriterion';

import { CreateCriterionRepositoryMySQL } from './database/mysql/CreateCriterionRepositoryMySQL';
import { DeleteCriterionRepositoryMySQL } from './database/mysql/DeleteCriterionRepositoryMySQL';
import { GetAllCriteriaRepositoryMySQL } from './database/mysql/GetAllCriteriaRepositoryMySQL';
import { FindCriterionByIdRepositoryMySQL } from './database/mysql/FindCriterionByIdRepositoryMySQL';
import { UpdateCriterionRepositoryMySQL } from './database/mysql/UpdateCriterionRepositoryMySQL';

// Instancia repositorios
const createCriterionRepository = new CreateCriterionRepositoryMySQL();
const deleteCriterionRepository = new DeleteCriterionRepositoryMySQL();
const getAllCriteriaRepository = new GetAllCriteriaRepositoryMySQL();
const findCriterionByIdRepository = new FindCriterionByIdRepositoryMySQL();
const updateCriterionRepository = new UpdateCriterionRepositoryMySQL();

// Instancia casos de uso
export const dependencies = {
  createCriterion: new CreateCriterion(createCriterionRepository),
  deleteCriterion: new DeleteCriterion(deleteCriterionRepository),
  getAllCriteria: new GetAllCriteria(getAllCriteriaRepository),
  getCriterionById: new GetCriterionById(findCriterionByIdRepository),
  updateCriterion: new UpdateCriterion(updateCriterionRepository),
};