import { Body, Controller, Post } from "@nestjs/common";
import { FeedbackService } from "../services/feedback.service";
import { CreateFeedbackDto } from "../dto/create-feedback.dto";

@Controller("feedback")
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.createFeedback(createFeedbackDto);
  }
}
