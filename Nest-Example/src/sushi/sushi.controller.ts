import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SushiService } from './sushi.service';
import { CreateSushiDto } from './dto/create-sushi.dto';
import { UpdateSushiDto } from './dto/update-sushi.dto';

@Controller('sushi')
export class SushiController {
  constructor(private readonly sushiService: SushiService) {}

  @Post()
  create(@Body() createSushiDto: CreateSushiDto) {
    return this.sushiService.create(createSushiDto);
  }

  @Get()
  findAll() {
    return this.sushiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sushiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSushiDto: UpdateSushiDto) {
    return this.sushiService.update(+id, updateSushiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sushiService.remove(+id);
  }
}
