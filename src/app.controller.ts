import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-users-dto';
import { UpdateUserDto } from './users/dto/update-users-dto';
import { UsersService } from './users/users.service';

@ApiTags('CRUD')
@Controller('user')
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'get all user data' })
  async getUserAll() {
    return this.usersService.findAll();
  }

  @Post('create')
  @ApiOperation({ summary: 'create new users data' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'test',
          description: 'this is username',
        },
        password: {
          type: 'string',
          example: '1234',
          description: 'this is password',
        },
        re_password: {
          type: 'string',
          example: '1234',
          description: 'this is re_password',
        },
      },
    },
  })
  async create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Post('login')
  @ApiOperation({ summary: 'login by username and password' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'test1',
          description: 'this is username',
        },
        password: {
          type: 'string',
          example: '1234',
          description: 'this is password',
        },
      },
    },
  })
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.usersService.login({
      username,
      password,
    });
    if (user === null || user === undefined) {
      return 'undifined';
    }
    return user;
  }

  @Patch('updateUser/:id')
  @ApiOperation({ summary: 'update user password by ID' })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'enter id',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        password: {
          type: 'string',
          example: '123',
          description: 'this is password',
        },
        re_password: {
          type: 'string',
          example: '123',
          description: 'this is re_password',
        },
      },
    },
  })
  async updateCamera(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete user data' })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'enter id',
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}
