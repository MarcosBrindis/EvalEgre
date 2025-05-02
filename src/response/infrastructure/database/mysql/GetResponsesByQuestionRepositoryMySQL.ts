import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseResponseRepository } from './BaseResponseRepository';

export class GetResponsesByQuestionRepositoryMySQL extends BaseResponseRepository {
    async findByQuestionId(questionId: number): Promise<any[]> {
        const [rows]: any = await MySQLConnection.execute(
          `
          SELECT 
            rd.id AS detalle_id,
            rd.respuesta_id,
            rd.pregunta_id,
            rd.valor_texto,
            rd.valor_numero,
            rd.creado_en AS detalle_creado_en,
            p.texto AS pregunta_texto,
            p.tipo AS pregunta_tipo
          FROM RespuestasDetalle rd
          JOIN Preguntas p ON rd.pregunta_id = p.id
          WHERE rd.pregunta_id = ?
          `,
          [questionId]
        );
    
        return rows.map((row: any) => {
          const detalle = {
            respuesta_id: row.respuesta_id,
            pregunta_id: row.pregunta_id,
            valor_texto: row.valor_texto || undefined,
            valor_numero: row.valor_numero || undefined,
            creado_en: row.detalle_creado_en,
            pregunta: {
              texto: row.pregunta_texto,
              tipo: row.pregunta_tipo,
            },
          };
    
          return Object.fromEntries(
            Object.entries(detalle).filter(([_, value]) => value !== undefined)
          );
        });
      }
}