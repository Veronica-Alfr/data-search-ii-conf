import { CreateIntervieweeDto } from './dto/create-interviewee.dto';
import { UpdateIntervieweeDto } from './dto/update-interviewee.dto';
import { IntervieweeRepository } from './repositories/interviewee.repository';
import { IntervieweeEntity } from './entities/interviewee.entity';
export declare class IntervieweesService {
    private readonly repository;
    constructor(repository: IntervieweeRepository);
    create(createUserDto: CreateIntervieweeDto): Promise<IntervieweeEntity>;
    findAll(): Promise<IntervieweeEntity[]>;
    findOne(id: number): Promise<IntervieweeEntity>;
    update(id: number, updateUserDto: UpdateIntervieweeDto): Promise<IntervieweeEntity>;
    remove(id: number): Promise<IntervieweeEntity>;
}
