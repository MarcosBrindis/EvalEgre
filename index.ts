import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './src/user/infrastructure/http/router/userRoutes';
import surveyRoutes from './src/survey/infrastructure/http/router/surveyRoutes';
import questionRoutes from './src/question/infrastructure/http/router/questionRoutes';
import responseRoutes from './src/response/infrastructure/http/router/responseRoutes';
dotenv.config();
const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/surveys', surveyRoutes);
app.use('/questions', questionRoutes);
app.use('/responses', responseRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});