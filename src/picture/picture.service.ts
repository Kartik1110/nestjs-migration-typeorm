import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { Picture } from './entities/picture.entity';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture) private pictureRepository: Repository<Picture> 
  ){}

  create(createPictureDto: CreatePictureDto) {
    const newPicture = this.pictureRepository.create(createPictureDto)
    return this.pictureRepository.save(newPicture)
  }

  findAll() {
    return this.pictureRepository.find()
  }

  findOne(id: number) {
    return this.pictureRepository.findOneBy({id});
  }

  async update(id: number, updatePictureDto: UpdatePictureDto) {
    const picture = await this.findOne(id)
  
    return this.pictureRepository.save({...picture, ...updatePictureDto});
  }

  async remove(id: number) {
    const picture = await this.findOne(id)

    return this.pictureRepository.remove(picture);
  }
}
