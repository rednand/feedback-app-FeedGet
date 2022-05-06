import { FeedbacksRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

//DRY - DONT REPEAT YOURSELF

export class SubmitFeedbackUseCase {
  constructor(private feedbackRepository: FeedbacksRepository) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;
    await this.feedbackRepository.create({ type, comment, screenshot });
  }
}
