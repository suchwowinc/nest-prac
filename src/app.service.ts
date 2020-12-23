import { Injectable } from '@nestjs/common';

const dogeMock = ['doggo', 'pupper', 'fluffer'];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getDoges(id?: number): string[] {
    if (id) {
      return [dogeMock[id - 1] || 'the unknown doggo'];
    }
    return dogeMock;
  }
}
