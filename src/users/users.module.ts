import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/mysql/user.entity';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/user.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [UserService],
  exports:[
    UserService
  ]
})
export class UsersModule {}
