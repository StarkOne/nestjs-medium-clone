import { Controller, Get } from '@nestjs/common';
import { TagSerice } from '@app/tag/tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagSerice) {}

  @Get()
  findAll(): string[] {
    return this.tagService.findAll();
  }
}
