import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSushiDto } from './dto/create-sushi.dto';
import { UpdateSushiDto } from './dto/update-sushi.dto';
import { Sushi } from './entities/sushi.entity';

@Injectable()
export class SushiService {

  private sushies:Sushi[]= [
    {id:1, name:'California', price:10},
    {id:2, name:'Eye of Tiger', price:15},
    {id:3, name:'Salmon Skin', price:12},
    {id:4, name:'Samurai', price:20},
  ];

  create(createSushiDto: CreateSushiDto) {
    this.sushies.push(createSushiDto);
    return createSushiDto;
  }

  findAll() {
    return this.sushies;
  }

  findOne(id: number) {
    const sushi = this.sushies.find(sushi => sushi.id === id);
    if(!sushi) return new NotFoundException('Sushi not found');
    return sushi;
  }


  update(id: number, updateSushiDto: UpdateSushiDto) {
    return `This action updates a #${id} sushi`;
  }

  remove(id: number) {
    this.sushies = this.sushies.filter(sushi => sushi.id !== id);
    return {
      message: `Sushi with id ${id} has been removed`,
      status: 203
    };
  }
}
