import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { BruhModule } from './bruh/bruh.module';

const CONFIG = {
  name: 'thanh',
  age: 12,
};

const ConfigOptions = {
  provide: 'CONFIG',
  useFactory: async () => {
    return await CONFIG;
  },
};

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BruhModule],
  // imports: [LoggerModule.forRoot()],
})
export class AppModule {}
