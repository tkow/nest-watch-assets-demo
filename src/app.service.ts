import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return readFileSync(
      resolve(__dirname, '..', 'assets', 'lorem.txt'),
    ).toString();
  }
}
