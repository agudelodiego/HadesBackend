import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Order } from './entities/order.entity';
import { Product } from './entities/product.entity';
import { ShoppingCart } from './entities/shoppincart.entity';
import { User } from './entities/user.entity';


@Module({
  imports: [

    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal:true
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: parseInt(configService.get('MYSQL_PORT')),
        username: configService.get('MYSQL_USERNAME'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DB_NAME'),
        entities: [
          User,
          Order,
          Product,
          Category,
          ShoppingCart,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    })

  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
