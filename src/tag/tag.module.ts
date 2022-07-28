import { Module } from '@nestjs/common';
import { TagController } from '@app/tag/tag.controller';
import { TagSerice } from '@app/tag/tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from '@app/tag/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagSerice],
})
export class TagModule {}
