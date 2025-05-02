import { Question } from '../../../question/domain/model/Question';
import { GetQuestionsBySurveyRepositoryMySQL } from '../../../question/infrastructure/database/mysql/GetQuestionsBySurveyRepositoryMySQL';
import { GetQuestionByIdRepositoryMySQL } from '../../../question/infrastructure/database/mysql/GetQuestionByIdRepositoryMySQL';
import { QuestionService } from '../../domain/port/QuestionrepositoryService'; 

export class QuestionServiceImpl implements QuestionService {
  private surveyQuestionRepository: GetQuestionsBySurveyRepositoryMySQL;
  private questionByIdRepository: GetQuestionByIdRepositoryMySQL;

  constructor() {
    this.surveyQuestionRepository = new GetQuestionsBySurveyRepositoryMySQL();
    this.questionByIdRepository = new GetQuestionByIdRepositoryMySQL();
  }

  async getQuestionById(questionId: number): Promise<Question | null> {
    return this.questionByIdRepository.findById(questionId); 
  }

  async getQuestionsBySurveyId(surveyId: number): Promise<Question[]> {
    return this.surveyQuestionRepository.findBySurveyId(surveyId);
  }
}