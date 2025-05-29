import { CreateSurvey } from '../application/usecase/CreateSurvey';
import { GetSurveyById } from '../application/usecase/GetSurvey';
import { UpdateSurvey } from '../application/usecase/UpdateSurvey';
import { DeleteSurvey } from '../application/usecase/DeleteSurvey';
import { GetAllSurveys } from '../application/usecase/GetAllSurvey';
import { CreateSurveyRepositoryMySQL } from './database/mysql/CreateSurveyRepositoryMySQL';
import { FindSurveyByIdRepositoryMySQL } from './database/mysql/GetSurveyRepositoryMySQL';
import { UpdateSurveyRepositoryMySQL } from './database/mysql/UpdateSurveyRepositoryMySQL';
import { DeleteSurveyRepositoryMySQL } from './database/mysql/DeleteSurveyRepositoryMySQL';
import { GetAllSurveysRepositoryMySQL } from './database/mysql/GetAllSurveyRepositoryMySQL';
import { NotificationServiceImpl } from './service/NotificationServiceImpl';

// Servicio de notificaciones
const notificationService = new NotificationServiceImpl();
notificationService.initialize();

// Repositorios
const createSurveyRepo = new CreateSurveyRepositoryMySQL();
const getSurveyByIdRepo = new FindSurveyByIdRepositoryMySQL();
const updateSurveyRepo = new UpdateSurveyRepositoryMySQL();
const deleteSurveyRepo = new DeleteSurveyRepositoryMySQL();
const getAllSurveysRepo = new GetAllSurveysRepositoryMySQL();

// Casos de uso
const createSurvey = new CreateSurvey(createSurveyRepo);
const getSurveyById = new GetSurveyById(getSurveyByIdRepo);
const updateSurvey = new UpdateSurvey(updateSurveyRepo);
const deleteSurvey = new DeleteSurvey(deleteSurveyRepo);
const getAllSurveys = new GetAllSurveys(getAllSurveysRepo);

export const dependencies = {createSurvey,getSurveyById,updateSurvey,deleteSurvey,getAllSurveys,notificationService,};