import { CreateProfessionalProfile } from '../application/usecase/CreateProfessionalProfile';
import { DeleteProfessionalProfile } from '../application/usecase/DeleteProfessionalProfile';
import { GetAllProfessionalProfiles } from '../application/usecase/GetAllProfessionalProfiles';
import { GetProfessionalProfileById } from '../application/usecase/GetProfessionalProfileById';
import { GetProfessionalProfileByUserId } from '../application/usecase/GetProfessionalProfileByUserId';
import { UpdateProfessionalProfile } from '../application/usecase/UpdateProfessionalProfile';

import { CreateProfessionalProfileRepositoryMySQL } from './database/mysql/CreateProfessionalProfileRepositoryMySQL';
import { DeleteProfessionalProfileRepositoryMySQL } from './database/mysql/DeleteProfessionalProfileRepositoryMySQL';
import { GetAllProfessionalProfilesRepositoryMySQL } from './database/mysql/GetAllProfessionalProfilesRepositoryMySQL';
import { FindProfessionalProfileByIdRepositoryMySQL } from './database/mysql/FindProfessionalProfileByIdRepositoryMySQL';
import { FindProfessionalProfileByUserIdRepositoryMySQL } from './database/mysql/FindProfessionalProfileByUserIdRepositoryMySQL';
import { UpdateProfessionalProfileRepositoryMySQL } from './database/mysql/UpdateProfessionalProfileRepositoryMySQL';

// Instancia repositorios
const createRepo = new CreateProfessionalProfileRepositoryMySQL();
const deleteRepo = new DeleteProfessionalProfileRepositoryMySQL();
const getAllRepo = new GetAllProfessionalProfilesRepositoryMySQL();
const findByIdRepo = new FindProfessionalProfileByIdRepositoryMySQL();
const findByUserIdRepo = new FindProfessionalProfileByUserIdRepositoryMySQL();
const updateRepo = new UpdateProfessionalProfileRepositoryMySQL();

// Instancia casos de uso
export const dependencies = {
  createProfessionalProfile: new CreateProfessionalProfile(createRepo),
  deleteProfessionalProfile: new DeleteProfessionalProfile(deleteRepo),
  getAllProfessionalProfiles: new GetAllProfessionalProfiles(getAllRepo),
  getProfessionalProfileById: new GetProfessionalProfileById(findByIdRepo),
  getProfessionalProfileByUserId: new GetProfessionalProfileByUserId(findByUserIdRepo),
  updateProfessionalProfile: new UpdateProfessionalProfile(updateRepo),
};