import { Module } from '@nestjs/common';
import { ConfigModule  } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/mysql/category.entity';
import { Order } from './entities/mongo/order.model';
import { Product } from './entities/mysql/product.entity';
import { User } from './entities/mysql/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './firebase/firebase.module';
import { Image } from './entities/mysql/image.entity';


@Module({
  imports: [

    //! This module allow us access to enviorement variables
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal:true
    }),

    //! Congiguration for mysql
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      entities: [
        User,
        Order,
        Image,
        Product,
        Category,
      ],
      synchronize: Boolean(process.env.DEVELOPMENT),
    }),

    //! Configuration for mongodb
    MongooseModule.forRoot(process.env.MONGODB_URI),

    UsersModule,

    AuthModule,

    FirebaseModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
