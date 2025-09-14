import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Space, SpaceDocument } from './space.schema';

@Injectable()
export class SpacesService {
  constructor(@InjectModel(Space.name) private spaceModel: Model<SpaceDocument>) {}

  create(ownerId: string, dto: any) {
    const s = new this.spaceModel({ ...dto, owner: ownerId });
    return s.save();
  }

  findAll() {
    return this.spaceModel.find().exec();
  }

  findById(id: string) {
    return this.spaceModel.findById(id).exec();
  }

  async update(id: string, ownerId: string, dto: any) {
    const s = await this.spaceModel.findById(id);
    if (!s) return null;
    if (s.owner.toString() !== ownerId) throw new ForbiddenException('Not owner');
    Object.assign(s, dto);
    return s.save();
  }

  async remove(id: string, ownerId: string) {
    const s = await this.spaceModel.findById(id);
    if (!s) return null;
    if (s.owner.toString() !== ownerId) throw new ForbiddenException('Not owner');
    return this.spaceModel.deleteOne({ _id: id }).exec();
  }
}
