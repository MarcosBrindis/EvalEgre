import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createEducationalFieldController } from '../controller/createEducationalFieldController';
import { updateEducationalFieldController } from '../controller/updateEducationalFieldController';
import { deleteEducationalFieldController } from '../controller/deleteEducationalFieldController';
import { getEducationalFieldByIdController } from '../controller/getEducationalFieldByIdController';
import { getAllEducationalFieldsController } from '../controller/getAllEducationalFieldController';
import { getEducationalFieldByNumeroController } from '../controller/getEducationalFieldByNumeroController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import { AuthorizationService } from '../../../../core/service/AuthorizationService';
const router = Router();

// controladores
const createEducationalField = createEducationalFieldController(dependencies.createEducationalField);
const updateEducationalField = updateEducationalFieldController(dependencies.updateEducationalField);
const deleteEducationalField = deleteEducationalFieldController(dependencies.deleteEducationalField);
const getEducationalFieldById = getEducationalFieldByIdController(dependencies.getEducationalFieldById);
const getEducationalFieldByNumero = getEducationalFieldByNumeroController(dependencies.getEducationalFieldByNumero);
const getAllEducationalFields = getAllEducationalFieldsController(dependencies.getAllEducationalFields);

// Rutas 
router.post('/', AuthMiddleware.verifyToken,AuthorizationService.verifyRole(['Administrador']) ,createEducationalField);
router.put('/:id', AuthMiddleware.verifyToken,AuthorizationService.verifyRole(['Administrador']) , updateEducationalField);
router.delete('/:id', AuthMiddleware.verifyToken,AuthorizationService.verifyRole(['Administrador']) , deleteEducationalField);
router.get('/numero/:numero', AuthMiddleware.verifyToken, getEducationalFieldByNumero);
router.get('/:id', AuthMiddleware.verifyToken, getEducationalFieldById);
router.get('/', AuthMiddleware.verifyToken, getAllEducationalFields);

export default router;