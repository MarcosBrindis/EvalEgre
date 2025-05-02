import { ResponseRepository } from '../../domain/port/ResponseRepository';

export class DeleteResponse {
  constructor(
    private deleteResponseRepository: ResponseRepository, 
    private getResponseRepository: ResponseRepository 
  ) {}

  async execute(responseId: number): Promise<void> {
    const existingResponse = await this.getResponseRepository.findById(responseId);
    if (!existingResponse) {
      throw new Error('Response not found');
    }

    await this.deleteResponseRepository.delete(responseId);
  }
}