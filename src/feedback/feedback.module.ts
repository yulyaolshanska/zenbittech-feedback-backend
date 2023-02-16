import { Module } from "@nestjs/common";
import { FeedbackController } from "./controllers/feedback.controller";
import { FeedbackService } from "./services/feedback.service";

@Module({
  imports: [],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
