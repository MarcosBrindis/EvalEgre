import { CreateResponse } from '../application/usecase/CreateResponse';
import { GetResponsesBySurvey } from '../application/usecase/GetResponsesBySurvey';
import { GetResponsesByQuestion } from '../application/usecase/GetResponsesByQuestion';
import { UpdateResponse } from '../application/usecase/UpdateResponse';
import { DeleteResponse } from '../application/usecase/DeleteResponse';
import { CreateResponseRepositoryMySQL } from './database/mysql/CreateResponseRepositoryMySQL';
import { GetResponseRepositoryMySQL } from './database/mysql/GetResponseRepositoryMySQL';
import { GetResponsesByQuestionRepositoryMySQL } from './database/mysql/GetResponsesByQuestionRepositoryMySQL';
import { UpdateResponseRepositoryMySQL } from './database/mysql/UpdateResponseRepositoryMySQL';
import { DeleteResponseRepositoryMySQL } from './database/mysql/DeleteResponseRepositoryMySQL';
import { QuestionServiceImpl } from './service/QuestionServiceImpl';

// Service
const questionService = new QuestionServiceImpl();

// Repositorios
const createResponseRepo = new CreateResponseRepositoryMySQL();
const getResponseRepo = new GetResponseRepositoryMySQL();
const getResponsesByQuestionRepo = new GetResponsesByQuestionRepositoryMySQL();
const updateResponseRepo = new UpdateResponseRepositoryMySQL();
const deleteResponseRepo = new DeleteResponseRepositoryMySQL();

// Casos de uso
const createResponse = new CreateResponse(createResponseRepo,getResponseRepo,questionService);
const getResponsesBySurvey = new GetResponsesBySurvey(getResponseRepo);
const getResponsesByQuestion = new GetResponsesByQuestion(getResponsesByQuestionRepo);
const updateResponse = new UpdateResponse(updateResponseRepo,getResponseRepo,questionService);
const deleteResponse = new DeleteResponse(deleteResponseRepo, getResponseRepo);

export const dependencies = {createResponse,getResponsesBySurvey,getResponsesByQuestion,updateResponse,deleteResponse,};