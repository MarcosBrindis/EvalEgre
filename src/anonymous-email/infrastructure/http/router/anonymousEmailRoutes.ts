import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createAnonymousEmailController } from '../controller/createAnonymousEmailController';
import { updateAnonymousEmailController } from '../controller/updateAnonymousEmailController';
import { deleteAnonymousEmailController } from '../controller/deleteAnonymousEmailController';
import { getAnonymousEmailByIdController } from '../controller/getAnonymousEmailByIdController';
import { getAllAnonymousEmailsController } from '../controller/getAllAnonymousEmailsController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';

const router = Router();

// controladores
const createAnonymousEmail = createAnonymousEmailController(dependencies.createAnonymousEmail);
const updateAnonymousEmail = updateAnonymousEmailController(dependencies.updateAnonymousEmail);
const deleteAnonymousEmail = deleteAnonymousEmailController(dependencies.deleteAnonymousEmail);
const getAnonymousEmailById = getAnonymousEmailByIdController(dependencies.getAnonymousEmailById);
const getAllAnonymousEmails = getAllAnonymousEmailsController(dependencies.getAllAnonymousEmails);

// Rutas 
router.post('/', AuthMiddleware.verifyToken, createAnonymousEmail);
router.put('/:id', AuthMiddleware.verifyToken, updateAnonymousEmail);
router.delete('/:id', AuthMiddleware.verifyToken, deleteAnonymousEmail);
router.get('/:id', AuthMiddleware.verifyToken, getAnonymousEmailById);
router.get('/', AuthMiddleware.verifyToken, getAllAnonymousEmails);

export default router;