import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateApiChimpDto } from './dto/create-api-chimp.dto';
import { UpdateApiChimpDto } from './dto/update-api-chimp.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ApiChimp} from './entities/api-chimp.entity';

@Injectable()
export class ApiChimpsService {
  constructor(
    @InjectModel(ApiChimp.name)
    private readonly apiChimpModel: Model<ApiChimp>
  ){}

  async create(createApiChimpDto: CreateApiChimpDto) {
    const chimp = this.apiChimpModel.create(createApiChimpDto);
    return chimp;
  }

  async findAll() {
    const chimps = this.apiChimpModel.find({});
    return chimps;
  }

  async findOne(id: string) {
    const chimp = this.apiChimpModel.findOne({_id: id});
    if(!chimp) throw new NotFoundException('Chimp not found 😒');
    return chimp;
  }

  async update(id: string, updateApiChimpDto: UpdateApiChimpDto) {
    let chimp = await this.findOne(id);
    await chimp.updateOne(updateApiChimpDto, {new: true});
    return {...chimp.toJSON(), updateApiChimpDto};
  }

  async remove(id: string) {
    const chimp = this.apiChimpModel.findById(id);
    await this.apiChimpModel.deleteOne({_id: id});
    return `Chimp #${id} deleted`;
  }
}
