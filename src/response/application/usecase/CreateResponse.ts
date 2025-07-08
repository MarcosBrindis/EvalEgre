import { ResponseRepository } from '../../domain/port/ResponseRepository';
import { QuestionService } from '../../domain/port/QuestionrepositoryService';
import { Response } from '../../domain/model/Response';
import { ResponseDetail } from '../../domain/model/ResponseDetail';
import { GetResponseRepositoryMySQL } from '../../infrastructure/database/mysql/GetResponseRepositoryMySQL';

export class CreateResponse {
  constructor(
    private responseRepository: ResponseRepository,
    private getResponseRepository: GetResponseRepositoryMySQL, 
    private questionService: QuestionService
  ) {}

  async execute(response: Response, details: ResponseDetail[]): Promise<number> {
    // Verificar si el usuario ya respondió esta encuesta
  if (response.usuario_id !== undefined && response.usuario_id !== null) {
    const existingResponse = await this.getResponseRepository.findBySurveyAndUser(
      response.encuesta_id,
      response.usuario_id
    );
    if (existingResponse) {
      throw new Error(`El usuario con ID ${response.usuario_id} ya respondió la encuesta con ID ${response.encuesta_id}.`);
    }
  }
  
    // Obtener todas las preguntas de la encuesta
    const questions = await this.questionService.getQuestionsBySurveyId(response.encuesta_id);
  
    if (!questions || questions.length === 0) {
      throw new Error(`No questions found for survey ID ${response.encuesta_id}`);
    }
  
    // Validar que todas las preguntas en los detalles pertenezcan a la encuesta
    const questionIds = questions.map((q) => q.id);
    for (const detail of details) {
      if (!questionIds.includes(detail.pregunta_id)) {
        throw new Error(`Question ID ${detail.pregunta_id} does not belong to survey ID ${response.encuesta_id}`);
      }
    }
  
    // Validar los detalles de la respuesta
    for (const detail of details) {
      const question = await this.questionService.getQuestionById(detail.pregunta_id);
  
      if (!question) {
        throw new Error(`Question with ID ${detail.pregunta_id} not found`);
      }      const tiposConOpciones: Array<string> = ['multiple', 'likert', 'checkbox'];
      if (tiposConOpciones.includes(question.tipo)) {
        if (!question.opciones) {
          throw new Error(`Options are missing for question ID ${detail.pregunta_id}`);
        }

        const validOption = question.opciones.some(
          (option: any) => option.valor === detail.valor_numero?.toString()
        );
        if (!validOption) {
          throw new Error(`Invalid option for question ID ${detail.pregunta_id}`);
        }
      } else if (question.tipo === 'abierta') {
        if (!detail.valor_texto || detail.valor_numero !== undefined) {
          throw new Error(`Invalid response for open-ended question ID ${detail.pregunta_id}`);
        }
      }
    }
  
    const responseId = await this.responseRepository.save(response);
  
    for (const detail of details) {
      detail.respuesta_id = responseId;
      await this.responseRepository.saveDetail(detail);
    }
  
    return responseId;
  }
}