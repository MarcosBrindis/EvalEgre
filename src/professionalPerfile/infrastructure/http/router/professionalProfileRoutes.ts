import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createProfessionalProfileController } from '../controller/createProfessionalProfileController';
import { getProfessionalProfileByIdController } from '../controller/getProfessionalProfileByIdController';
import { getProfessionalProfileByUserIdController } from '../controller/getProfessionalProfileByUserIdController';
import { updateProfessionalProfileController } from '../controller/updateProfessionalProfileController';
import { deleteProfessionalProfileController } from '../controller/deleteProfessionalProfileController';
import { getAllProfessionalProfilesController } from '../controller/getAllProfessionalProfilesController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';


const router = Router();

// Controladores
const createProfile = createProfessionalProfileController(dependencies.createProfessionalProfile);
const getProfileById = getProfessionalProfileByIdController(dependencies.getProfessionalProfileById);
const getProfileByUserId = getProfessionalProfileByUserIdController(dependencies.getProfessionalProfileByUserId);
const updateProfile = updateProfessionalProfileController(dependencies.updateProfessionalProfile);
const deleteProfile = deleteProfessionalProfileController(dependencies.deleteProfessionalProfile);
const getAllProfiles = getAllProfessionalProfilesController(dependencies.getAllProfessionalProfiles);

// Rutas
router.post('/', AuthMiddleware.verifyToken, createProfile);
router.get('/user/:userId', AuthMiddleware.verifyToken, getProfileByUserId);
router.get('/:id', AuthMiddleware.verifyToken, getProfileById);
router.get('/', AuthMiddleware.verifyToken, getAllProfiles);
router.put('/user/:userId', AuthMiddleware.verifyToken, updateProfile);
router.delete('/:id', AuthMiddleware.verifyToken, deleteProfile);

export default router;