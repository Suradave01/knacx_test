import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CodingService } from './coding.service';

@ApiTags('Coding')
@Controller('coding')
export class CodingController {
  constructor(private readonly codingService: CodingService) {}

  @Get('randomAll')
  @ApiOperation({ summary: 'random 4 char' })
  async randomAll() {
    return this.codingService.randomAll();
  }

  @Post('randomByIndex')
  @ApiOperation({ summary: 'random by index' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        index: {
          type: 'string',
          example: '1',
          description: 'index number',
        },
      },
    },
  })
  async randomByIndex(@Body() index: string) {
    return this.codingService.randomByIndex(index);
  }
}
