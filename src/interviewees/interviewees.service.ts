import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIntervieweeDto } from './dto/create-interviewee.dto';
import { UpdateIntervieweeDto } from './dto/update-interviewee.dto';
import { IntervieweeRepository } from './repositories/interviewee.repository';
import { IntervieweeEntity } from './entities/interviewee.entity';

@Injectable()
export class IntervieweesService {
  constructor(private readonly repository: IntervieweeRepository) {}
  create(createUserDto: CreateIntervieweeDto) {
    return this.repository.create(createUserDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<IntervieweeEntity> {
    const interviewee = await this.repository.findOne(id);

    if (!interviewee) {
      throw new NotFoundException('Interviewee not found');
    }

    return interviewee;
  }

  update(id: number, updateUserDto: UpdateIntervieweeDto) {
    return this.repository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
