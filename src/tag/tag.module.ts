import { Module } from '@nestjs/common';
import { TagController } from '@app/tag/tag.controller';
import { TagSerice } from '@app/tag/tag.service';

@Module({
  controllers: [TagController],
  providers: [TagSerice],
})
export class TagModule {}
