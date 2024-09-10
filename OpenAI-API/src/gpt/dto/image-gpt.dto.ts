import { IsString } from "class-validator";

export class GenerateImageGptDto {
    @IsString()
    prompt: string;
}