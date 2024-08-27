import { PartialType } from '@nestjs/mapped-types';
import { CreateApiChimpDto } from './create-api-chimp.dto';

export class UpdateApiChimpDto extends PartialType(CreateApiChimpDto) {}
