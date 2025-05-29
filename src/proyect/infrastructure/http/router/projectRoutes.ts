import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createProjectController } from '../controller/createProjectController';
import { getProjectByIdController } from '../controller/getProjectController';
import { updateProjectController } from '../controller/updateProjectController';
import { deleteProjectController } from '../controller/deleteProjectController';
import { getAllProjectsController } from '../controller/getAllProjectsController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import { AuthorizationService } from '../../../../core/service/AuthorizationService';

const router = Router();

// Controladores
const createProject = createProjectController(dependencies.createProject);
const getProjectById = getProjectByIdController(dependencies.getProjectById);
const updateProject = updateProjectController(dependencies.updateProject);
const deleteProject = deleteProjectController(dependencies.deleteProject);
const getAllProjects = getAllProjectsController(dependencies.getAllProjects);

// Rutas
router.post('/', AuthMiddleware.verifyToken, AuthorizationService.verifyRole(['Egresado', 'Administrador']), createProject);
router.get('/:id', AuthMiddleware.verifyToken, getProjectById);
router.get('/', AuthMiddleware.verifyToken, getAllProjects);
router.put('/:id', AuthMiddleware.verifyToken, AuthorizationService.verifyOwnershipOrRole(['Egresado', 'Administrador']), updateProject);
router.delete('/:id', AuthMiddleware.verifyToken, AuthorizationService.verifyOwnershipOrRole(['Egresado', 'Administrador']), deleteProject);

export default router;