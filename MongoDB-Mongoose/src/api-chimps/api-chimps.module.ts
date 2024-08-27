import { Module } from '@nestjs/common';
import { ApiChimpsService } from './api-chimps.service';
import { ApiChimpsController } from './api-chimps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiChimp, ApiChimpSchema } from './entities/api-chimp.entity';

@Module({
  controllers: [ApiChimpsController],
  providers: [ApiChimpsService],
  imports: [
    MongooseModule.forFeature([{ name: ApiChimp.name, schema: ApiChimpSchema }])
  ]
})
export class ApiChimpsModule {}
