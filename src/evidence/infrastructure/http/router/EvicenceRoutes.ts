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

router.post('/', AuthMiddleware.verifyToken, upload.single('archivo'), createEvidenceController(dependencies.createEvidence));
router.get('/project/:projectId', AuthMiddleware.verifyToken, getAllEvidenceByProjectController(dependencies.getAllEvidenceByProject));
router.get('/types', AuthMiddleware.verifyToken, getAllEvidenceTypesController(dependencies.getAllEvidenceTypes));
router.get('/:id', AuthMiddleware.verifyToken, getEvidenceByIdController(dependencies.getEvidenceById));
router.put('/:id', AuthMiddleware.verifyToken, upload.single('archivo'), updateEvidenceController(dependencies.updateEvidence));
router.delete('/:id', AuthMiddleware.verifyToken, deleteEvidenceController(dependencies.deleteEvidence));

export default router;