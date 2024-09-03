import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { Repository } from 'typeorm';
import { Ingredient } from 'src/ingredients/entities/ingredient.entity';

@Injectable()
export class PizzasService {
  constructor(
    @InjectRepository(Pizza)
    private readonly pizzaRepository: Repository<Pizza>,

    @InjectRepository(Ingredient)
    private readonly ingretientRepository: Repository<Ingredient>,
  ) {}

  async create(createPizzaDto: CreatePizzaDto) {
    const pizza = this.pizzaRepository.create(createPizzaDto);
    await this.pizzaRepository.save(pizza);
    return pizza;
  }

  findAll() {
    return this.pizzaRepository.find({
      relations: {ingredients: true},
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }

  async addIngredientToPizza(pizzaID: string, IngredientID: string) {
    const pizza = await this.pizzaRepository.findOne({
      where: { id: pizzaID },
      relations: ['ingredients'],
    });

    if(!pizza)
      throw new NotFoundException('Pizza not found');

   const ingredient = await this.ingretientRepository.findOne({
      where: { id: IngredientID },
   });

    if(!ingredient)
        throw new NotFoundException('Ingredient not found');

    pizza.ingredients.push(ingredient);
    return await this.pizzaRepository.save(pizza);
  }
}
