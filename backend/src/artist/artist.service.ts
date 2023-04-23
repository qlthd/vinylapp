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
        return this.artistModel.create(createArtist);
      }
    
      findAll() {
        return this.artistModel.find();
      }
    
      findOne(id: number) {
        return this.artistModel.findById(id);
      }
    
      update(id: number, updateArtist: Artist) {
        this.artistModel.updateOne(a => a.id == id, updateArtist);
      }
    
      remove(id: string) {
        return this.artistModel.remove({_id: id});
      }
}
