import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createResponseController } from '../controller/CreateResponseController';
import { getResponsesBySurveyController } from '../controller/GetResponsesBySurveyController';
import { getResponsesByQuestionController } from '../controller/GetResponsesByQuestionController';
import { updateResponseController } from '../controller/UpdateResponseController';
import { deleteResponseController } from '../controller/DeleteResponseController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';

const router = Router();

// Controladores
const createResponse = createResponseController(dependencies.createResponse);
const getResponsesBySurvey = getResponsesBySurveyController(dependencies.getResponsesBySurvey);
const getResponsesByQuestion = getResponsesByQuestionController(dependencies.getResponsesByQuestion);
const updateResponse = updateResponseController(dependencies.updateResponse);
const deleteResponse = deleteResponseController(dependencies.deleteResponse);

// Rutas
router.post('/', AuthMiddleware.verifyToken, createResponse);
router.get('/survey/:surveyId', AuthMiddleware.verifyToken, getResponsesBySurvey); 
router.get('/question/:questionId', AuthMiddleware.verifyToken, getResponsesByQuestion); 
router.put('/survey/:id', AuthMiddleware.verifyToken, updateResponse); 
router.delete('/:id', AuthMiddleware.verifyToken, deleteResponse); 

export default router;