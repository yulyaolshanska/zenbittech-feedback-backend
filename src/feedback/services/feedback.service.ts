import { Injectable } from "@nestjs/common";
import { Feedback } from "src/feedback/interfaces/feedback.interface";

@Injectable()
export class FeedbackService {
  private readonly feedbacks: Feedback[] = [];
  createFeedback(feedback: Feedback) {
    this.feedbacks.push(feedback);
  }
}
