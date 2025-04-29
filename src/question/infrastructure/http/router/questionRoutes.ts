import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createQuestionController } from '../controller/CreateQuestionController';
import { getQuestionsBySurveyController } from '../controller/GetQuestionsBySurveyController';
import { getQuestionByIdController } from '../controller/GetQuestionByIdController';
import { updateQuestionController } from '../controller/UpdateQuestionController';
import { deleteQuestionController } from '../controller/DeleteQuestionController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import { AuthorizationService } from '../../../../core/service/AuthorizationService';

const router = Router();

// Controladores
const createQuestion = createQuestionController(dependencies.createQuestion);
const getQuestionsBySurvey = getQuestionsBySurveyController(dependencies.getQuestionsBySurvey);
const getQuestionById = getQuestionByIdController(dependencies.getQuestionById);
const updateQuestion = updateQuestionController(dependencies.updateQuestion);
const deleteQuestion = deleteQuestionController(dependencies.deleteQuestion);

// Rutas
router.post('/', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Administrador']), createQuestion); 
router.get('/survey/:surveyId', AuthMiddleware.verifyToken, getQuestionsBySurvey); 
router.get('/:id',AuthMiddleware.verifyToken, getQuestionById);
router.put('/:questionId', AuthMiddleware.verifyToken, AuthorizationService.verifyOwnershipOrRole(['Administrador']), updateQuestion); 
router.delete('/:questionId', AuthMiddleware.verifyToken, AuthorizationService.verifyOwnershipOrRole(['Administrador']), deleteQuestion); 

export default router;