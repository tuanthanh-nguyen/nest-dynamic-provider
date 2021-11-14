import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { BruhService } from './bruh/bruh.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly bruhService: BruhService,
  ) {}

  @Get()
  getHello(): string {
    this.appService.getHello();
    return this.bruhService.getShit();
  }
}
