import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { IngredientsModule } from 'src/ingredients/ingredients.module';

@Module({
  controllers: [PizzasController],
  providers: [PizzasService],
  imports: [TypeOrmModule.forFeature([Pizza]), IngredientsModule],
  exports: [TypeOrmModule]
})
export class PizzasModule {}
