import { IntervieweesService } from './interviewees.service';
import { CreateIntervieweeDto } from './dto/create-interviewee.dto';
import { UpdateIntervieweeDto } from './dto/update-interviewee.dto';
export declare class IntervieweesController {
    private readonly intervieweesService;
    constructor(intervieweesService: IntervieweesService);
    create(createIntervieweeDto: CreateIntervieweeDto): Promise<import("./entities/interviewee.entity").IntervieweeEntity>;
    findAll(): Promise<import("./entities/interviewee.entity").IntervieweeEntity[]>;
    findOne(id: string): Promise<import("./entities/interviewee.entity").IntervieweeEntity>;
    update(id: string, updateIntervieweeDto: UpdateIntervieweeDto): Promise<import("./entities/interviewee.entity").IntervieweeEntity>;
    remove(id: string): Promise<import("./entities/interviewee.entity").IntervieweeEntity>;
}
