import { QuestionRepository } from '../../../domain/port/QuestionRepository';
import { Question } from '../../../domain/model/Question';
import { OptionQuestion } from '../../../domain/model/OptionQuestion';

export abstract class BaseQuestionRepository implements QuestionRepository {
  save(_question: Question, _options?: OptionQuestion[]): Promise<Question> {
    return Promise.reject(new Error('Method save not implemented'));
  }
  findBySurveyId(_surveyId: number): Promise<Question[]> {
    return Promise.reject(new Error('Method findBySurveyId not implemented'));
  }
  findById(_questionId: number): Promise<Question | null> {
    return Promise.reject(new Error('Method findById not implemented'));
  }
  update(_question: Question, _options?: OptionQuestion[]): Promise<void> {
    return Promise.reject(new Error('Method update not implemented'));
  }
  delete(_questionId: number): Promise<void> {
    return Promise.reject(new Error('Method delete not implemented'));
  }
}