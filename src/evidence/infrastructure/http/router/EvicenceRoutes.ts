import { Router } from 'express';
import { dependencies } from '../../dependencies';
import { createEvidenceController } from '../controller/createEvidenceController';
import { getEvidenceByIdController } from '../controller/getEvidenceController';
import { updateEvidenceController } from '../controller/updateEvidenceController';
import { deleteEvidenceController } from '../controller/deleteEvidenceController';
import { getAllEvidenceByProjectController } from '../controller/getAllEvidenceController';
import { getAllEvidenceTypesController } from '../controller/getAllEvidenceTypeController';
import { AuthMiddleware } from '../../../../core/middleware/jwtAuthMiddleware';
import multer from 'multer';

const upload = multer();

const router = Router();

// Controladores
const createEvidence = createEvidenceController(dependencies.createEvidence);
const getEvidenceById = getEvidenceByIdController(dependencies.getEvidenceById);
const updateEvidence = updateEvidenceController(dependencies.updateEvidence);
const deleteEvidence = deleteEvidenceController(dependencies.deleteEvidence);
const getAllEvidenceByProject = getAllEvidenceByProjectController(dependencies.getAllEvidenceByProject);
const getAllEvidenceTypes = getAllEvidenceTypesController(dependencies.getAllEvidenceTypes);

// Rutas
router.post('/', AuthMiddleware.verifyToken, upload.single('archivo'), createEvidence);
router.get('/project/:projectId', AuthMiddleware.verifyToken, getAllEvidenceByProject);
router.get('/types', AuthMiddleware.verifyToken, getAllEvidenceTypes);
router.get('/:id', AuthMiddleware.verifyToken, getEvidenceById);
router.put('/:id', AuthMiddleware.verifyToken, upload.single('archivo'), updateEvidence);
router.delete('/:id', AuthMiddleware.verifyToken, deleteEvidence);

export default router;