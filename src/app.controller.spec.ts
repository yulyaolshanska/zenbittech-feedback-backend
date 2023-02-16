import { Test, TestingModule } from "@nestjs/testing";
import { FeedbackController } from "./feedback/controllers/feedback.controller";
import { FeedbackService } from "./feedback/services/feedback.service";

describe("AppController", () => {
  let appController: FeedbackController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FeedbackController],
      providers: [FeedbackService],
    }).compile();

    appController = app.get<FeedbackController>(FeedbackController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
