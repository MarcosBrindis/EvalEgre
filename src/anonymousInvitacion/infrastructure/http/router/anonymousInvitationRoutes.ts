import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createAnonymousInvitationController } from '../controller/createAnonymousInvitationController';
import { findAnonymousInvitationByCodeController } from '../controller/findAnonymousInvitationByCodeController';
import { findAnonymousInvitationsBySurveyController } from '../controller/findAnonymousInvitationsBySurveyController';
import { markAnonymousInvitationAsRespondedController } from '../controller/markAnonymousInvitationAsRespondedController';
import { checkAnonymousInvitationController } from '../controller/checkAnonymousInvitationController';

const router = Router();

// Controladores
const createAnonymousInvitation = createAnonymousInvitationController(dependencies.createAnonymousInvitation);
const findAnonymousInvitationByCode = findAnonymousInvitationByCodeController(dependencies.findInvitationByCode);
const findAnonymousInvitationsBySurvey = findAnonymousInvitationsBySurveyController(dependencies.findInvitationsBySurvey);
const markAnonymousInvitationAsResponded = markAnonymousInvitationAsRespondedController(dependencies.markInvitationAsResponded);
const checkAnonymousInvitation = checkAnonymousInvitationController(dependencies.findInvitationByCode);

// Rutas
router.post('/', createAnonymousInvitation);
router.get('/survey/:surveyId', findAnonymousInvitationsBySurvey);
router.get('/code/:code', findAnonymousInvitationByCode);
router.get('/code/:code/check', checkAnonymousInvitation);
router.put('/code/:code/mark-responded', markAnonymousInvitationAsResponded);

export default router;