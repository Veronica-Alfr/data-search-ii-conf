import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IntervieweesModule } from './interviewees/interviewees.module';

@Module({
  imports: [ConfigModule.forRoot(), IntervieweesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
