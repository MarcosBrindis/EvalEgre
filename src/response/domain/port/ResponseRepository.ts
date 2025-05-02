import { Response } from '../model/Response';
import { ResponseDetail } from '../model/ResponseDetail';

export interface ResponseRepository {
  save(response: Response): Promise<number>; 
  saveDetail(detail: ResponseDetail): Promise<void>; 
  findBySurveyId(surveyId: number): Promise<Response[]>; 
  findById(responseId: number): Promise<Response | null>;
  findByQuestionId(questionId: number): Promise<ResponseDetail[]>; 
  findBySurveyAndUser(surveyId: number, userId: number): Promise<Response | null>; 
  update(response: Response): Promise<void>; 
  updateDetail(detail: ResponseDetail): Promise<void>;
  delete(responseId: number): Promise<void>; 
}