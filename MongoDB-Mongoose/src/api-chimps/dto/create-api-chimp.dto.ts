import { IsPositive, IsString, MinLength, IsNotEmpty } from "class-validator";

export class CreateApiChimpDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    type: string;

    @IsPositive()
    price: number;
}
