import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IntervieweeEntity } from '../entities/interviewee.entity';
import { CreateIntervieweeDto } from '../dto/create-interviewee.dto';
import { UpdateIntervieweeDto } from '../dto/update-interviewee.dto';

@Injectable()
export class IntervieweeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createUserDto: CreateIntervieweeDto,
  ): Promise<IntervieweeEntity> {
    const intervieweeCreate = await this.prisma.intervieweeForm.create({
      data: createUserDto,
    });

    return intervieweeCreate;
  }

  async findAll(): Promise<IntervieweeEntity[]> {
    return this.prisma.intervieweeForm.findMany();
  }

  async findOne(id: number): Promise<IntervieweeEntity> {
    const interviewee = await this.prisma.intervieweeForm.findUnique({
      where: {
        id,
      },
    });

    return interviewee;
  }

  async update(
    id: number,
    updateUserDto: UpdateIntervieweeDto,
  ): Promise<IntervieweeEntity> {
    const intervieweeUpdate = await this.prisma.intervieweeForm.update({
      where: {
        id,
      },
      data: updateUserDto,
    });

    return intervieweeUpdate;
  }

  async remove(id: number): Promise<IntervieweeEntity> {
    const intervieweeDelete = await this.prisma.intervieweeForm.delete({
      where: {
        id,
      },
    });

    return intervieweeDelete;
  }
}
