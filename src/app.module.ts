import { Module } from '@nestjs/common';
import { ConfigModule  } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Order } from './entities/order.entity';
import { Product } from './entities/product.entity';
import { ShoppingCart } from './entities/shoppincart.entity';
import { User } from './entities/user.entity';


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
        Product,
        Category,
      ],
      synchronize: Boolean(process.env.DEVELOPMENT),
    }),

    //! Configuration for mongodb
    MongooseModule.forRoot(process.env.MONGODB_URI)
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
