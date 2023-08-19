import { PrismaService } from 'src/prisma/prisma.service';
import { IntervieweeEntity } from '../entities/interviewee.entity';
import { CreateIntervieweeDto } from '../dto/create-interviewee.dto';
import { UpdateIntervieweeDto } from '../dto/update-interviewee.dto';
export declare class IntervieweeRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateIntervieweeDto): Promise<IntervieweeEntity>;
    findAll(): Promise<IntervieweeEntity[]>;
    findOne(id: number): Promise<IntervieweeEntity>;
    update(id: number, updateUserDto: UpdateIntervieweeDto): Promise<IntervieweeEntity>;
    remove(id: number): Promise<IntervieweeEntity>;
}
