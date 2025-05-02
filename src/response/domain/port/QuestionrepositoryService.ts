import { Question } from '../../../question/domain/model/Question';

export interface QuestionService {
  getQuestionById(questionId: number): Promise<Question | null>;
  getQuestionsBySurveyId(surveyId: number): Promise<Question[]>;
}