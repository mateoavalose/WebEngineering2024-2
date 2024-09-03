import { Image } from 'src/images/entities/image.entity';
import { Pizza } from 'src/pizzas/entities/pizza.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',
        {
            unique: true
        }
    )
    name: string;

    @OneToMany(
        () => Image,
        (image) => image.ingredient
    )
    images?: Image[];

    @ManyToMany(() => Pizza,
        (pizza) => pizza.ingredients)
    @JoinTable()
    pizzas: Pizza[];
}
