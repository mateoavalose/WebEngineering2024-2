import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // TypeORM config
import { ConfigModule } from '@nestjs/config'; // Access to .env file
import { IngredientsModule } from './ingredients/ingredients.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ConfigModule.forRoot(), TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,
      synchronize: true
    }), IngredientsModule, ImagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
