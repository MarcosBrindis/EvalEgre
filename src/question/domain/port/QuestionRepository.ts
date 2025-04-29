import { Question } from '../model/Question';
import { OptionQuestion } from '../model/OptionQuestion';

export interface QuestionRepository {
  save(question: Question, options?: OptionQuestion[]): Promise<Question>; 
  findBySurveyId(surveyId: number): Promise<Question[]>; 
  findById(questionId: number): Promise<Question | null>;
  update(question: Question, options?: OptionQuestion[]): Promise<void>; 
  delete(questionId: number): Promise<void>; 
}