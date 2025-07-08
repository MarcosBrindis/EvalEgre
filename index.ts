import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import userRoutes from './src/user/infrastructure/http/router/userRoutes';
import surveyRoutes from './src/survey/infrastructure/http/router/surveyRoutes';
import questionRoutes from './src/question/infrastructure/http/router/questionRoutes';
import responseRoutes from './src/response/infrastructure/http/router/responseRoutes';
import projectRoutes  from './src/proyect/infrastructure/http/router/projectRoutes';
import evidenceRoutes from './src/evidence/infrastructure/http/router/EvicenceRoutes';
import criterionRoutes from './src/criterion/infrastructure/http/router/criterionRoutes';
import evaluationRoutes from './src/evaluation/infrastructure/http/router/evaluationRoutes';
import professionalProfileRoutes from './src/professionalPerfile/infrastructure/http/router/professionalProfileRoutes';
import anonymousInvitationRoutes from './src/anonymousInvitacion/infrastructure/http/router/anonymousInvitationRoutes';
import anonymousEmailRoutes from './src/anonymous-email/infrastructure/http/router/anonymousEmailRoutes';
import notificationRoutes from './src/notification/infrastructure/http/router/notificationRoutes';
import EducationalFieldRoutes from './src/EducationalField/infrastructure/http/router/EducationalFieldRoutes';

dotenv.config();
const app = express();
app.use(cors()); 

app.use(express.json());
app.use('/users', userRoutes);
app.use('/surveys', surveyRoutes);
app.use('/questions', questionRoutes);
app.use('/responses', responseRoutes);
app.use('/projects', projectRoutes);
app.use('/evidences', evidenceRoutes);
app.use('/criteria', criterionRoutes);
app.use('/evaluations', evaluationRoutes);
app.use('/professional-profiles', professionalProfileRoutes);
app.use('/anonymous-invitations', anonymousInvitationRoutes);
app.use('/anonymous-emails', anonymousEmailRoutes);
app.use('/notifications', notificationRoutes);
app.use('/educational-fields', EducationalFieldRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});