import { Controller, Get, Render, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Post("/task")
  createTask(@Req() request: Request){
    console.log (request)
  }
}
