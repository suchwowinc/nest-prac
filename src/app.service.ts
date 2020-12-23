import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDoge(): string {
    return 'Hello Doge';
  }
  getDoges(): string[] {
    return ['doggo', 'pupper', 'fluffer'];
  }
}
