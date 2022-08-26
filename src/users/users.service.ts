import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-users-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async findAll() {
    return this.UsersRepository.find();
  }

  async create(data: any) {
    if (data.password != data.re_password) {
      throw error('password != re_password');
    }
    return this.UsersRepository.save(data);
  }

  async login(data: any) {
    return this.UsersRepository.findOneBy(data);
  }

  async updateUser(id: number, data: UpdateUserDto) {
    if (data.password != data.re_password) {
      throw error('password != re_password');
    }
    return this.UsersRepository.update(id, {
      password: data.password,
      re_password: data.re_password,
    });
  }

  async remove(id: number) {
    return await this.UsersRepository.delete(id);
  }
}
