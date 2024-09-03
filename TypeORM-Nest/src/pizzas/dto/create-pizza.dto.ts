import { IsString } from "class-validator";

export class CreatePizzaDto {
    @IsString()
    name: string;
}
