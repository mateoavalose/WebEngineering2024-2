import { Ingredient } from "src/ingredients/entities/ingredient.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pizza {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', 
        { unique: true}
    )
    name: string;

    @ManyToMany(() => Ingredient,
        (ingredient) => ingredient.pizzas)
    ingredients: Ingredient[];
}
