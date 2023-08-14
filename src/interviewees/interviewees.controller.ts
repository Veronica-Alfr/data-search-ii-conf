import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IntervieweesService } from './interviewees.service';
import { CreateIntervieweeDto } from './dto/create-interviewee.dto';
import { UpdateIntervieweeDto } from './dto/update-interviewee.dto';

@Controller('interviewees')
export class IntervieweesController {
  constructor(private readonly intervieweesService: IntervieweesService) {}

  @Post()
  create(@Body() createIntervieweeDto: CreateIntervieweeDto) {
    return this.intervieweesService.create(createIntervieweeDto);
  }

  @Get()
  findAll() {
    return this.intervieweesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intervieweesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIntervieweeDto: UpdateIntervieweeDto,
  ) {
    return this.intervieweesService.update(+id, updateIntervieweeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intervieweesService.remove(+id);
  }
}
