import { IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateSushiDto {
    @Min(1)
    @IsNumber()
    id:number;

    @IsString()
    @MinLength(3)
    name:string;

    @Min(1)
    @IsNumber()
    price:number;
}