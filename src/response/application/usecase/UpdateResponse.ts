import { ResponseRepository } from '../../domain/port/ResponseRepository';
import { QuestionService } from '../../domain/port/QuestionrepositoryService';
import { ResponseDetail } from '../../domain/model/ResponseDetail';
import { GetResponseRepositoryMySQL } from '../../infrastructure/database/mysql/GetResponseRepositoryMySQL';

export class UpdateResponse {
  constructor(
    private responseRepository: ResponseRepository,
    private getResponseRepository: GetResponseRepositoryMySQL, 
    private questionService: QuestionService
  ) {}

  async execute(encuestaId: number, usuarioId: number, details: ResponseDetail[]): Promise<void> {
    // Verificar si existe una respuesta para el usuario y la encuesta
    const response = await this.getResponseRepository.findBySurveyAndUser(encuestaId, usuarioId);
    if (!response) {
      throw new Error(`No se encontró una respuesta para la encuesta ${encuestaId} y el usuario ${usuarioId}`);
    }

    const respuestaId = response.id;

    // 2) Validar que todas las preguntas en los detalles pertenezcan a la encuesta
    const questions = await this.questionService.getQuestionsBySurveyId(encuestaId);
    const questionIds = questions.map((q) => q.id);

    for (const detail of details) {
      if (!questionIds.includes(detail.pregunta_id)) {
        throw new Error(`Pregunta ID ${detail.pregunta_id} no pertenece a la encuesta ${encuestaId}`);
      }
    }

    // 3) Validar los detalles de la respuesta
    for (const detail of details) {
      const question = await this.questionService.getQuestionById(detail.pregunta_id);

      if (!question) {
        throw new Error(`Pregunta ID ${detail.pregunta_id} no existe.`);
      }

      if (question.tipo === 'multiple' || question.tipo === 'likert') {
        if (!question.opciones) {
          throw new Error(`Faltan opciones para la pregunta ID ${detail.pregunta_id}`);
        }

        const validOption = question.opciones.some(
          (option: any) => option.valor === detail.valor_numero?.toString()
        );
        if (!validOption) {
          throw new Error(`Opción inválida (${detail.valor_numero}) para la pregunta ID ${detail.pregunta_id}`);
        }

        // Asegurarse de que solo se rellene `valor_numero`
        detail.valor_texto = undefined;
      } else if (question.tipo === 'abierta') {
        if (!detail.valor_texto || detail.valor_numero !== undefined) {
          throw new Error(`Respuesta inválida para la pregunta abierta ID ${detail.pregunta_id}`);
        }

        // Asegurarse de que solo se rellene `valor_texto`
        detail.valor_numero = undefined;
      }
    }

    for (const detail of details) {
      await this.responseRepository.updateDetail({
        ...detail,
        respuesta_id: respuestaId as number, 
      });
    }
  }
}