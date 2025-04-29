import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createSurveyController } from '../controller/createSurveyController';
import { getSurveyByIdController } from '../controller/getSurveyController';
import { updateSurveyController } from '../controller/updateSurveyController';
import { deleteSurveyController } from '../controller/deleteSurveyController';
import { getAllSurveysController } from '../controller/getAllSurveysController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import { AuthorizationService } from '../../../../core/service/AuthorizationService';

const router = Router();

// Controladores
const createSurvey = createSurveyController(dependencies.createSurvey);
const getSurveyById = getSurveyByIdController(dependencies.getSurveyById);
const updateSurvey = updateSurveyController(dependencies.updateSurvey);
const deleteSurvey = deleteSurveyController(dependencies.deleteSurvey);
const getAllSurveys = getAllSurveysController(dependencies.getAllSurveys);

// Rutas
router.post('/', AuthMiddleware.verifyToken,AuthorizationService.verifyRole(['Administrador']),createSurvey);
router.get('/:id',AuthMiddleware.verifyToken,getSurveyById);
router.get('/',AuthMiddleware.verifyToken,getAllSurveys);
router.put('/:id',AuthMiddleware.verifyToken,AuthorizationService.verifyOwnershipOrRole(['Administrador']),updateSurvey);
router.delete('/:id',AuthMiddleware.verifyToken, AuthorizationService.verifyOwnershipOrRole(['Administrador']),deleteSurvey);

export default router;