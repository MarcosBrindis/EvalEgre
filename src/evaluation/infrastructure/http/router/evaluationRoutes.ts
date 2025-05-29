import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createEvaluationController } from '../controller/createEvaluationController';
import { getEvaluationByIdController } from '../controller/getEvaluationByIdController';
import { updateEvaluationController } from '../controller/updateEvaluationController';
import { deleteEvaluationController } from '../controller/deleteEvaluationController';
import { getAllEvaluationsController } from '../controller/getAllEvaluationsController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import { AuthorizationService } from '../../../../core/service/AuthorizationService';

const router = Router();

// Controladores
const createEvaluation = createEvaluationController(dependencies.createEvaluation);
const getEvaluationById = getEvaluationByIdController(dependencies.getEvaluationById);
const updateEvaluation = updateEvaluationController(dependencies.updateEvaluation);
const deleteEvaluation = deleteEvaluationController(dependencies.deleteEvaluation);
const getAllEvaluations = getAllEvaluationsController(dependencies.getAllEvaluations);

// Rutas
router.post('/', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Administrador', 'Evaluador']), createEvaluation);
router.get('/:id', AuthMiddleware.verifyToken, getEvaluationById);
router.get('/', AuthMiddleware.verifyToken, getAllEvaluations);
router.put('/:id', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Administrador', 'Evaluador']), updateEvaluation);
router.delete('/:id', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Administrador']), deleteEvaluation);

export default router;