import { Response } from '../../../domain/model/Response';
import { ResponseDetail } from '../../../domain/model/ResponseDetail';

export abstract class BaseResponseRepository {
  save(_response: Response): Promise<number> {
    return Promise.reject(new Error('Method save not implemented'));
  }

  saveDetail(_detail: ResponseDetail): Promise<void> {
    return Promise.reject(new Error('Method saveDetail not implemented'));
  }

  findBySurveyId(_surveyId: number): Promise<Response[]> {
    return Promise.reject(new Error('Method findBySurveyId not implemented'));
  }

  findById(_responseId: number): Promise<Response | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }

  findByQuestionId(_questionId: number): Promise<ResponseDetail[]> {
    return Promise.reject(new Error('Method findByQuestionId not implemented'));
  }

  findBySurveyAndUser(_surveyId: number, _userId: number): Promise<Response | null> {
    return Promise.reject(new Error('Method findBySurveyAndUser not implemented'));
  }

  update(_response: Response): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }

  updateDetail(_detail: ResponseDetail): Promise<void> {
    return Promise.reject(new Error('Method updateDetail not implemented'));
  }

  delete(_responseId: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}