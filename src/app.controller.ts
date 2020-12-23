import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/doges/:id')
  getDoge(@Param('id') id: number): string | string[] {
    return this.appService.getDoges(id);
  }
  @Get('/doges')
  getDoges(): string[] {
    return this.appService.getDoges();
  }
}
