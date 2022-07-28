import { Injectable } from '@nestjs/common';

@Injectable()
export class TagSerice {
  findAll(): string[] {
    return ['dragons', 'coffee', 'weather'];
  }
}
