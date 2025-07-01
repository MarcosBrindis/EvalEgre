import { Response } from '../../../domain/model/Response';
import { MySQLConnection } from '../../../../core/db/mysql/connection';
import { BaseResponseRepository } from './BaseResponseRepository';

export class GetResponseRepositoryMySQL extends BaseResponseRepository {
  async findBySurveyId(encuesta_id: number): Promise<any[]> {
    const [rows]: any = await MySQLConnection.execute(
      `
      SELECT 
        r.id AS respuesta_id,
        r.encuesta_id,
        r.usuario_id,
        r.creado_en AS respuesta_creado_en,
        r.actualizado_en AS respuesta_actualizado_en,
        rd.id AS detalle_id,
        rd.pregunta_id,
        rd.valor_texto,
        rd.valor_numero,
        rd.creado_en AS detalle_creado_en
      FROM Respuestas r
      LEFT JOIN RespuestasDetalle rd ON r.id = rd.respuesta_id
      WHERE r.encuesta_id = ?
      ORDER BY r.creado_en, rd.pregunta_id
      `,
      [encuesta_id]
    );
  
    const groupedResponses: any[] = [];
    const responseMap = new Map<number, any>();
  
    for (const row of rows) {
      if (!responseMap.has(row.respuesta_id)) {
        const response = {
          id: row.respuesta_id,
          encuesta_id: row.encuesta_id,
          usuario_id: row.usuario_id,
          creado_en: row.respuesta_creado_en,
          actualizado_en: row.respuesta_actualizado_en,
          detalles: [],
        };
        responseMap.set(row.respuesta_id, response);
        groupedResponses.push(response);
      }
  
      if (row.detalle_id) {
        // Filtrar valores null
        const detalle = {
          id: row.detalle_id,
          pregunta_id: row.pregunta_id,
          valor_texto: row.valor_texto || undefined,
          valor_numero: row.valor_numero || undefined,
          creado_en: row.detalle_creado_en,
        };
  
        // Eliminar campos que sean undefined
        const filteredDetalle = Object.fromEntries(
          Object.entries(detalle).filter(([_, value]) => value !== undefined)
        );
        responseMap.get(row.respuesta_id).detalles.push(filteredDetalle);
      }
    }
    return groupedResponses;
  }

  async findById(responseId: number): Promise<Response | null> {
    const [rows]: any = await MySQLConnection.execute(
      `SELECT * FROM Respuestas WHERE id = ?`,
      [responseId]
    );

    if (rows.length === 0) {
      return null;
    }

    const row = rows[0];
    return {
      id: row.id,
      encuesta_id: row.encuesta_id,
      usuario_id: row.usuario_id || undefined,
      creado_en: row.creado_en,
      actualizado_en: row.actualizado_en,
    };
  }

async findBySurveyAndUser(encuestaId: number, usuarioId?: number): Promise<Response | null> {
  if (usuarioId === undefined || usuarioId === null) {
    // Si no hay usuario, no buscar (caso anónimo)
    return null;
  }
  const [rows]: any = await MySQLConnection.execute(
    `SELECT * FROM Respuestas WHERE encuesta_id = ? AND usuario_id = ?`,
    [encuestaId, usuarioId]
  );

  if (rows.length === 0) {
    return null;
  }

  const row = rows[0];
  return {
    id: row.id,
    encuesta_id: row.encuesta_id,
    usuario_id: row.usuario_id,
    creado_en: row.creado_en,
    actualizado_en: row.actualizado_en,
  };
}
}
