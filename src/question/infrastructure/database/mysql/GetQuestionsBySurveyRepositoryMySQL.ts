import { BaseQuestionRepository } from './BaseQuestionRepository';
import { Question } from '../../../domain/model/Question';
import { OptionQuestion } from '../../../domain/model/OptionQuestion';
import { MySQLConnection } from '../../../../core/db/mysql/connection';

export class GetQuestionsBySurveyRepositoryMySQL extends BaseQuestionRepository {
  async findBySurveyId(encuesta_id: number): Promise<Question[]> {

    const [questions]: any = await MySQLConnection.execute(
      `SELECT * FROM Preguntas WHERE encuesta_id = ? ORDER BY orden`,
      [encuesta_id]
    );

    if (questions.length === 0) {
      return []; 
    }

    const questionIds = questions.map((q: any) => q.id);

    let options: any[] = [];
    if (questionIds.length > 0) {
      const [optionsResult]: any = await MySQLConnection.execute(
        `SELECT * FROM OpcionesPregunta WHERE pregunta_id IN (${questionIds.join(',')})`
      );
      options = optionsResult;
    }

    const optionsByQuestionId = options.reduce((map: Record<number, OptionQuestion[]>, option: any) => {
      if (!map[option.pregunta_id]) map[option.pregunta_id] = [];
      map[option.pregunta_id].push({
        id: option.id,
        pregunta_id: option.pregunta_id,
        valor: option.valor,
        etiqueta: option.etiqueta,
        peso: option.peso || undefined,
      });
      return map;
    }, {});


    return questions.map((q: any): Question => ({
      id: q.id,
      encuesta_id: q.encuesta_id,
      tipo: q.tipo as 'multiple' | 'likert' | 'abierta',
      texto: q.texto,
      orden: q.orden,
      competencia_asociada: q.competencia_asociada || undefined,
      campo_educacional_numero: q.campo_educacional_numero || undefined,
      opciones: optionsByQuestionId[q.id] || [], 
    }));
  }
}