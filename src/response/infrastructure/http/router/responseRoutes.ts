import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createResponseController } from '../controller/CreateResponseController';
import { createAnonymousResponseController } from '../controller/CreateResponseAnonymousContoller';
import { getResponsesBySurveyController } from '../controller/GetResponsesBySurveyController';
import { getResponsesByQuestionController } from '../controller/GetResponsesByQuestionController';
import { updateResponseController } from '../controller/UpdateResponseController';
import { deleteResponseController } from '../controller/DeleteResponseController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
//import { makeAnonymousInvitationMiddleware } from '../../../../core/middleware/AnonymousInvitationMiddleware';

const router = Router();

// Controladores
const createResponse = createResponseController(dependencies.createResponse);
const createAnonymousResponse = createAnonymousResponseController(dependencies.createResponse); 
const getResponsesBySurvey = getResponsesBySurveyController(dependencies.getResponsesBySurvey);
const getResponsesByQuestion = getResponsesByQuestionController(dependencies.getResponsesByQuestion);
const updateResponse = updateResponseController(dependencies.updateResponse);
const deleteResponse = deleteResponseController(dependencies.deleteResponse);
//const anonymousInvitationMiddleware = makeAnonymousInvitationMiddleware(dependencies.findInvitationByCode);

// Rutas
router.post('/', AuthMiddleware.verifyToken, createResponse);
router.get('/survey/:surveyId', AuthMiddleware.verifyToken, getResponsesBySurvey); 
router.get('/question/:questionId', AuthMiddleware.verifyToken, getResponsesByQuestion); 
router.put('/survey/:id', AuthMiddleware.verifyToken, updateResponse); 
router.delete('/:id', AuthMiddleware.verifyToken, deleteResponse); 

router.post('/anonymous', createAnonymousResponse); 
export default router;