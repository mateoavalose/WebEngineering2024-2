import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GptService } from './gpt.service';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';
import { TranslateGptDto } from './dto/translate-gpt.dto';
import { GenerateImageGptDto } from './dto/image-gpt.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('translate')
  async translate(@Body() gptDto:TranslateGptDto) {
    return this.gptService.translate(gptDto);
  }

  @Post('pros-cons-discussion')
  async prosConsDiscussion(@Body() gptDto:TranslateGptDto) {
    return this.gptService.prosConsDiscussion(gptDto);
  }

  @Post('generate-image')
  async generateImage(@Body() gptDto:GenerateImageGptDto) {
    return this.gptService.generateImage(gptDto);
  }

  @Post()
  create(@Body() createGptDto: CreateGptDto) {
    return this.gptService.create(createGptDto);
  }

  @Get()
  findAll() {
    return this.gptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGptDto: UpdateGptDto) {
    return this.gptService.update(+id, updateGptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gptService.remove(+id);
  }
}
