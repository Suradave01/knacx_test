import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coding } from './entities/coding-entity';

@Injectable()
export class CodingService {
  //   constructor(
  //     @InjectRepository(Coding)
  //     private CodingRepository: Repository<Coding>,
  //   ) {}

  async randomAll() {
    const characters = 'ABCD';
    let random = ' ';
    for (let i = 0; i < characters.length; i++) {
      random += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return random;
  }

  async randomByIndex(data: any) {
    const characters = 'ABCD';
    let random = ' ';
    for (let i = 0; i < 1; i++) {
      random += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return `index : ${data.index} = ${random}`;
  }
}
