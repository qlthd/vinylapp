import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist, ArtistDocument } from './artist.model';

@Injectable()
export class ArtistService {
    constructor(@InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
    ) { 

    }

    create(createArtist: Artist) {
        return 'This action adds a new artist';
      }
    
      findAll() {
        return `This action returns all artist`;
      }
    
      findOne(id: number) {
        return this.artistModel.findById(id);
      }
    
      update(id: number, updateArtist: Artist) {
        return `This action updates a #${id} artist`;
      }
    
      remove(id: number) {
        return `This action removes a #${id} artist`;
      }
}
