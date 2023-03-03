import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Module({
  imports: [

    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal:true
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin1234',
      database: 'eweed',
      entities: [User],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
