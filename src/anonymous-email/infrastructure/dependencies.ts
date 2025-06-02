import { CreateAnonymousEmail } from '../application/usecase/CreateAnonymousEmail';
import { UpdateAnonymousEmail } from '../application/usecase/UpdateAnonymousEmail';
import { DeleteAnonymousEmail } from '../application/usecase/DeleteAnonymousEmail';
import { GetAnonymousEmailById } from '../application/usecase/GetAnonymousEmailById';
import { GetAllAnonymousEmails } from '../application/usecase/GetAllAnonymousEmails';

import { CreateAnonymousEmailRepositoryMySQL } from './database/mysql/CreateAnonymousEmailRepositoryMySQL';
import { UpdateAnonymousEmailRepositoryMySQL } from './database/mysql/UpdateAnonymousEmailRepositoryMySQL';
import { DeleteAnonymousEmailRepositoryMySQL } from './database/mysql/DeleteAnonymousEmailRepositoryMySQL';
import { FindAnonymousEmailByIdRepositoryMySQL } from './database/mysql/FindAnonymousEmailByIdRepositoryMySQL';
import { GetAllAnonymousEmailsRepositoryMySQL } from './database/mysql/GetAllAnonymousEmailsRepositoryMySQL';

// Instancia de repositorios
const createRepo = new CreateAnonymousEmailRepositoryMySQL();
const updateRepo = new UpdateAnonymousEmailRepositoryMySQL();
const deleteRepo = new DeleteAnonymousEmailRepositoryMySQL();
const findByIdRepo = new FindAnonymousEmailByIdRepositoryMySQL();
const findAllRepo = new GetAllAnonymousEmailsRepositoryMySQL();

export const dependencies = {
  createAnonymousEmail: new CreateAnonymousEmail(createRepo),
  updateAnonymousEmail: new UpdateAnonymousEmail(updateRepo),
  deleteAnonymousEmail: new DeleteAnonymousEmail(deleteRepo),
  getAnonymousEmailById: new GetAnonymousEmailById(findByIdRepo),
  getAllAnonymousEmails: new GetAllAnonymousEmails(findAllRepo),
};