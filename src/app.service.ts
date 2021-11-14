import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { Logger } from './logger/logger.decorator';
import { BruhService } from './bruh/bruh.service';

@Injectable()
export class AppService {
  constructor(private readonly bruhService: BruhService) {}
  // constructor(@Logger('AppService') private readonly logger: LoggerService) {}
  getHello(): string {
    // this.logger.log('Hello World');

    this.bruhService.getShit();

    return 'Hello World!';
  }
}
