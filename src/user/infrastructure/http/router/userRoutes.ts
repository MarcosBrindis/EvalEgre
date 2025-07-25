import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createUserController } from '../controller/createUserController';
import { getUserController } from '../controller/getUserController';
import { updateUserController } from '../controller/updateUserController';
import { deleteUserController } from '../controller/deleteUserController';
import { loginController } from '../controller/loguinUserController';
import { getAllUsersController } from '../controller/getAllUsersController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import { AuthorizationService } from '../../../../core/service/AuthorizationService';

const router = Router();

// Controladores
const createUser = createUserController(dependencies.createUser);
const getUser = getUserController(dependencies.getUser);
const updateUser = updateUserController(dependencies.updateUser);
const deleteUser = deleteUserController(dependencies.deleteUser);
const loginUser = loginController(dependencies.loginUser);
const getAllUsers = getAllUsersController(dependencies.getAllUsers); 

// Rutas
router.post('/', createUser);
router.get('/', AuthMiddleware.verifyToken, getAllUsers); 
router.get('/:id', getUser);
router.put('/:id',AuthMiddleware.verifyToken,updateUser);
router.delete('/:id',AuthMiddleware.verifyToken,AuthorizationService.verifyOwnershipOrRole(['Administrador']),deleteUser);
router.post('/login', loginUser);

export default router;