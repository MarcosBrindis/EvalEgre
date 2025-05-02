import { ResponseRepository } from '../../domain/port/ResponseRepository';
import { ResponseDetail } from '../../domain/model/ResponseDetail';

export class GetResponsesByQuestion {
  constructor(private responseRepository: ResponseRepository) {}

  async execute(questionId: number): Promise<ResponseDetail[]> {
    return this.responseRepository.findByQuestionId(questionId);
  }
}