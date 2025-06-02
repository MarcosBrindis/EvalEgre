import { CreateAnonymousInvitation } from '../application/usecase/CreateAnonymousInvitation';
import { FindInvitationByCode } from '../application/usecase/FindInvitationByCode';
import { FindInvitationsBySurvey } from '../application/usecase/FindInvitationsBySurvey';
import { MarkInvitationAsResponded } from '../application/usecase/MarkInvitationAsResponded';
import { FindInvitationByEmailAndSurvey } from '../application/usecase/FindInvitationByEmailAndSurvey';

import { CreateAnonymousInvitationRepositoryMySQL } from './database/mysql/CreateAnonymousInvitationRepositoryMySQL';
import { FindAnonymousInvitationByCodeRepositoryMySQL } from './database/mysql/FindAnonymousInvitationByCodeRepositoryMySQL';
import { FindAnonymousInvitationsBySurveyRepositoryMySQL } from './database/mysql/FindAnonymousInvitationsBySurveyRepositoryMySQL';
import { MarkAnonymousInvitationAsRespondedRepositoryMySQL } from './database/mysql/MarkAnonymousInvitationAsRespondedRepositoryMySQL';

// Repos
const createAnonymousInvitationRepo = new CreateAnonymousInvitationRepositoryMySQL();
const findInvitationByCodeRepo = new FindAnonymousInvitationByCodeRepositoryMySQL();
const findInvitationsBySurveyRepo = new FindAnonymousInvitationsBySurveyRepositoryMySQL();
const markInvitationAsRespondedRepo = new MarkAnonymousInvitationAsRespondedRepositoryMySQL();

// Casos de uso
export const dependencies = {
  createAnonymousInvitation: new CreateAnonymousInvitation(createAnonymousInvitationRepo),
  findInvitationByCode: new FindInvitationByCode(findInvitationByCodeRepo),
  findInvitationsBySurvey: new FindInvitationsBySurvey(findInvitationsBySurveyRepo),
  markInvitationAsResponded: new MarkInvitationAsResponded(markInvitationAsRespondedRepo),
  findInvitationByEmailAndSurvey: new FindInvitationByEmailAndSurvey(createAnonymousInvitationRepo), 
};