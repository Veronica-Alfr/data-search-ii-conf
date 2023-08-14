import { PartialType } from '@nestjs/mapped-types';
import { CreateIntervieweeDto } from './create-interviewee.dto';

export class UpdateIntervieweeDto extends PartialType(CreateIntervieweeDto) {}
