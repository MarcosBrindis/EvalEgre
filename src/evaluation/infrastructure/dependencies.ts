import { CreateEvaluation } from '../application/usecase/CreateEvaluation';
import { DeleteEvaluation } from '../application/usecase/DeleteEvaluation';
import { GetAllEvaluations } from '../application/usecase/GetAllEvaluations';
import { GetEvaluationById } from '../application/usecase/GetEvaluationById';
import { UpdateEvaluation } from '../application/usecase/UpdateEvaluation';

import { CreateEvaluationRepositoryMySQL } from './database/mysql/CreateEvaluationRepositoryMySQL';
import { DeleteEvaluationRepositoryMySQL } from './database/mysql/DeleteEvaluationRepositoryMySQL';
import { GetAllEvaluationsRepositoryMySQL } from './database/mysql/GetAllEvaluationsRepositoryMySQL';
import { FindEvaluationByIdRepositoryMySQL } from './database/mysql/FindEvaluationByIdRepositoryMySQL';
import { UpdateEvaluationRepositoryMySQL } from './database/mysql/UpdateEvaluationRepositoryMySQL';

// Instancia repositorios
const createEvaluationRepository = new CreateEvaluationRepositoryMySQL();
const deleteEvaluationRepository = new DeleteEvaluationRepositoryMySQL();
const getAllEvaluationsRepository = new GetAllEvaluationsRepositoryMySQL();
const findEvaluationByIdRepository = new FindEvaluationByIdRepositoryMySQL();
const updateEvaluationRepository = new UpdateEvaluationRepositoryMySQL();

// Instancia casos de uso
export const dependencies = {
  createEvaluation: new CreateEvaluation(createEvaluationRepository),
  deleteEvaluation: new DeleteEvaluation(deleteEvaluationRepository),
  getAllEvaluations: new GetAllEvaluations(getAllEvaluationsRepository),
  getEvaluationById: new GetEvaluationById(findEvaluationByIdRepository),
  updateEvaluation: new UpdateEvaluation(updateEvaluationRepository),
};