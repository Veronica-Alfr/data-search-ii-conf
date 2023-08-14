import { Test, TestingModule } from '@nestjs/testing';
import { IntervieweesService } from './interviewees.service';

describe('IntervieweesService', () => {
  let service: IntervieweesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntervieweesService],
    }).compile();

    service = module.get<IntervieweesService>(IntervieweesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
