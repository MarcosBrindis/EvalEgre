import { CreateQuestion } from '../application/usecase/CreateQuestion';
import { GetQuestionsBySurvey } from '../application/usecase/GetQuestionsBySurvey';
import { UpdateQuestion } from '../application/usecase/UpdateQuestion';
import { DeleteQuestion } from '../application/usecase/DeleteQuestion';
import { GetQuestionById } from '../application/usecase/GetQuestionById';
import { CreateQuestionRepositoryMySQL } from './database/mysql/CreateQuestionRepositoryMySQL';
import { GetQuestionsBySurveyRepositoryMySQL } from './database/mysql/GetQuestionsBySurveyRepositoryMySQL';
import { UpdateQuestionRepositoryMySQL } from './database/mysql/UpdateQuestionRepositoryMySQL';
import { DeleteQuestionRepositoryMySQL } from './database/mysql/DeleteQuestionRepositoryMySQL';
import { GetQuestionByIdRepositoryMySQL } from './database/mysql/GetQuestionByIdRepositoryMySQL';

// Repositorios
const createQuestionRepo = new CreateQuestionRepositoryMySQL();
const getQuestionsBySurveyRepo = new GetQuestionsBySurveyRepositoryMySQL();
const updateQuestionRepo = new UpdateQuestionRepositoryMySQL();
const deleteQuestionRepo = new DeleteQuestionRepositoryMySQL();
const getQuestionByIdRepo = new GetQuestionByIdRepositoryMySQL();

// Casos de uso
const createQuestion = new CreateQuestion(createQuestionRepo);
const getQuestionsBySurvey = new GetQuestionsBySurvey(getQuestionsBySurveyRepo);
const updateQuestion = new UpdateQuestion(updateQuestionRepo);
const deleteQuestion = new DeleteQuestion(deleteQuestionRepo);
const getQuestionById = new GetQuestionById(getQuestionByIdRepo);

export const dependencies = {createQuestion,getQuestionsBySurvey,updateQuestion,deleteQuestion,getQuestionById,};