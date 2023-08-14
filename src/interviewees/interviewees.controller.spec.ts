import { Test, TestingModule } from '@nestjs/testing';
import { IntervieweesController } from './interviewees.controller';
import { IntervieweesService } from './interviewees.service';

describe('IntervieweesController', () => {
  let controller: IntervieweesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntervieweesController],
      providers: [IntervieweesService],
    }).compile();

    controller = module.get<IntervieweesController>(IntervieweesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
