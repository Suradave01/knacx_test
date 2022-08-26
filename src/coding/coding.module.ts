import { Module } from '@nestjs/common';
import { CodingController } from './coding.controller';
import { CodingService } from './coding.service';

@Module({
  controllers: [CodingController],
  providers: [CodingService],
})
export class CodingModule {}
