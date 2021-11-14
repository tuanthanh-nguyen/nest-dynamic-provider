import { Module } from '@nestjs/common';
import { BruhService } from './bruh.service';

@Module({
  providers: [BruhService],
  exports: [BruhService],
})
export class BruhModule {}
