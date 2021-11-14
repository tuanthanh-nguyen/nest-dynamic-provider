import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class BruhService {
  private count = 0;
  constructor() {}
  getShit() {
    this.count++;
    console.log(this.count);

    return 'this shit is done';
  }
}
