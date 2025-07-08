import { CreateEducationalField } from '../application/usecase/CreateEducationalField';
import { UpdateEducationalField } from '../application/usecase/UpdateEducationalField';
import { DeleteEducationalField } from '../application/usecase/DeleteEducationalField';
import { GetEducationalFieldById } from '../application/usecase/GetEducationalFieldById';
import { GetEducationalFieldByNumero } from '../application/usecase/GetEducationalFieldByNumero';
import { GetAllEducationalFields } from '../application/usecase/GetAllEducationalField';

import { EducationalFieldRepositoryMySQL } from './database/mysql/EducationalFieldRepositoryMySQL';

// Instancia del repositorio principal
const educationalFieldRepo = new EducationalFieldRepositoryMySQL();

export const dependencies = {
  createEducationalField: new CreateEducationalField(educationalFieldRepo),
  updateEducationalField: new UpdateEducationalField(educationalFieldRepo),
  deleteEducationalField: new DeleteEducationalField(educationalFieldRepo),
  getEducationalFieldById: new GetEducationalFieldById(educationalFieldRepo),
  getEducationalFieldByNumero: new GetEducationalFieldByNumero(educationalFieldRepo),
  getAllEducationalFields: new GetAllEducationalFields(educationalFieldRepo),
};