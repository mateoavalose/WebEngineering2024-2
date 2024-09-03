import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>
  ){}

  async create(createImageDto: CreateImageDto) {
    try {
      const image = this.imageRepository.create(createImageDto);
      await this.imageRepository.save(image);
      return image;
    } catch (e) {
      throw new InternalServerErrorException('Image already exists');
    }
  }

  async findAll() {
    const images = await this.imageRepository.find();
    return images;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
