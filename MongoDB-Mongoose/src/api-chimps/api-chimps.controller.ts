import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiChimpsService } from './api-chimps.service';
import { CreateApiChimpDto } from './dto/create-api-chimp.dto';
import { UpdateApiChimpDto } from './dto/update-api-chimp.dto';

@Controller('api-chimps')
export class ApiChimpsController {
  constructor(private readonly apiChimpsService: ApiChimpsService) {}

  @Post()
  create(@Body() createApiChimpDto: CreateApiChimpDto) {
    return this.apiChimpsService.create(createApiChimpDto);
  }

  @Get()
  findAll() {
    return this.apiChimpsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiChimpsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiChimpDto: UpdateApiChimpDto) {
    return this.apiChimpsService.update(id, updateApiChimpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiChimpsService.remove(id);
  }
}
