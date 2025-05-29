import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createCriterionController } from '../controller/createCriterionController';
import { getCriterionByIdController } from '../controller/getCriterionByIdController';
import { updateCriterionController } from '../controller/updateCriterionController';
import { deleteCriterionController } from '../controller/deleteCriterionController';
import { getAllCriteriaController } from '../controller/getAllCriteriaController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import { AuthorizationService } from '../../../../core/service/AuthorizationService';

const router = Router();

// Controladores
const createCriterion = createCriterionController(dependencies.createCriterion);
const getCriterionById = getCriterionByIdController(dependencies.getCriterionById);
const updateCriterion = updateCriterionController(dependencies.updateCriterion);
const deleteCriterion = deleteCriterionController(dependencies.deleteCriterion);
const getAllCriteria = getAllCriteriaController(dependencies.getAllCriteria);

// Rutas
router.post('/', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Administrador']), createCriterion);
router.get('/:id', AuthMiddleware.verifyToken, getCriterionById);
router.get('/', AuthMiddleware.verifyToken, getAllCriteria);
router.put('/:id', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Administrador']), updateCriterion);
router.delete('/:id', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Administrador']), deleteCriterion);

export default router;