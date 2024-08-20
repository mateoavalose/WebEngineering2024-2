import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SushiModule } from './sushi/sushi.module';

@Module({
  imports: [SushiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
