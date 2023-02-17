import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateFeedbackDto } from "../dto/create-feedback.dto";
import { Feedback } from "../feedback.entity";

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbacksRepository: Repository<Feedback>
  ) {}

  async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<any> {
    // const feedback = new Feedback();
    // feedback.name = "Me and Bears";
    // feedback.email = "I am near polar bears";
    // feedback.message = "photo-with-bears.jpg";

    const feedback = new Feedback();
    feedback.name = createFeedbackDto.name;
    feedback.email = createFeedbackDto.email;
    feedback.message = createFeedbackDto.message;
    console.log(feedback);
    return await this.feedbacksRepository.save(feedback);
  }
}
