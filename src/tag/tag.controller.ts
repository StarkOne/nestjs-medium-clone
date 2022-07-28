import { Controller, Get } from '@nestjs/common';
import { TagSerice } from '@app/tag/tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagSerice) {}

  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
