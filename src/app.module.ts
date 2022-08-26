import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/entities/users.entity';
import { UsersService } from './users/users.service';
import { CodingController } from './coding/coding.controller';
import { CodingService } from './coding/coding.service';
import { CodingModule } from './coding/coding.module';
import { Coding } from './coding/entities/coding-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test_knacx',
      entities: [Users, Coding],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Users, Coding]),
    CodingModule,
  ],

  controllers: [AppController, CodingController],
  providers: [AppService, UsersService, CodingService],
})
export class AppModule {}
