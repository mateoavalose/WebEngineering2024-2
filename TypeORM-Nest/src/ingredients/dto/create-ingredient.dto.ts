import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateIngredientDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @ApiProperty({
        example: 'Ingredient name',
        description: 'The name of the ingredient'
    })
    name: string;
}
