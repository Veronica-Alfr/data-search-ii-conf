import { Module } from '@nestjs/common';
import { IntervieweesService } from './interviewees.service';
import { IntervieweesController } from './interviewees.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { IntervieweeRepository } from './repositories/interviewee.repository';

@Module({
  controllers: [IntervieweesController],
  providers: [IntervieweesService, PrismaService, IntervieweeRepository],
})
export class IntervieweesModule {}
