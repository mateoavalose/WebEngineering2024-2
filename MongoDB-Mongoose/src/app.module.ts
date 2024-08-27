import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiChimpsModule } from './api-chimps/api-chimps.module';

@Module({
  imports: [ApiChimpsModule, 
    MongooseModule.forRoot('mongodb://localhost:27017/bloonsDB'

    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
