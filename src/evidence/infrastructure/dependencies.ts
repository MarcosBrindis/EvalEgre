import { CreateEvidence } from '../application/usecase/CreateEvidence';
import { DeleteEvidence } from '../application/usecase/DeleteEvidence';
import { GetAllEvidenceByProject } from '../application/usecase/GetAllEvidence';
import { GetEvidenceById } from '../application/usecase/GetEvidence';
import { UpdateEvidence } from '../application/usecase/UpdateEvidence';
import { GetAllEvidenceTypes } from '../application/usecase/GetAllEvidenceType';

import { CreateEvidenceRepositoryMySQL } from './database/mysql/CreateEvidenceRepositoryMySQL';
import { DeleteEvidenceRepositoryMySQL } from './database/mysql/DeleteEvidenceRepositoryMySQL';
import { GetAllEvidenceByProjectRepositoryMySQL } from './database/mysql/GetAllEvidenceRepositoryMySQL';
import { FindEvidenceByIdRepositoryMySQL } from './database/mysql/FindEvidenceByIdRepositoryMySQL';
import { UpdateEvidenceRepositoryMySQL } from './database/mysql/UpdateEvidenceRepositoryMySQL';
import { EvidenceTypeRepositoryMySQL } from './database/mysql/EvidenceTypeRepositoryMySQL';

const createEvidenceRepository = new CreateEvidenceRepositoryMySQL();
const deleteEvidenceRepository = new DeleteEvidenceRepositoryMySQL();
const getAllEvidenceByProjectRepository = new GetAllEvidenceByProjectRepositoryMySQL();
const findEvidenceByIdRepository = new FindEvidenceByIdRepositoryMySQL();
const updateEvidenceRepository = new UpdateEvidenceRepositoryMySQL();
const evidenceTypeRepository = new EvidenceTypeRepositoryMySQL();

export const dependencies = {
  createEvidence: new CreateEvidence(createEvidenceRepository),
  deleteEvidence: new DeleteEvidence(deleteEvidenceRepository),
  getAllEvidenceByProject: new GetAllEvidenceByProject(getAllEvidenceByProjectRepository),
  getEvidenceById: new GetEvidenceById(findEvidenceByIdRepository),
  updateEvidence: new UpdateEvidence(updateEvidenceRepository),
  getAllEvidenceTypes: new GetAllEvidenceTypes(evidenceTypeRepository),
};