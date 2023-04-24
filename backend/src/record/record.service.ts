import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecordDocument, Record } from './record.model';


@Injectable()
export class RecordService {
    constructor(@InjectModel(Record.name) private recordModel: Model<RecordDocument>,
    ) { 

    }

    create(createRecord: Record) {
        return this.recordModel.create(createRecord);
    }
    
      findAll() {
        return this.recordModel.find();
      }
    
      findByName(name: string) {
        return this.recordModel.findOne({name: name});
      }
    
      update(id: number, updateRecord: Record) {
        this.recordModel.updateOne(a => a.id == id, updateRecord);
      }
    
      remove(id: string) {
        return this.recordModel.remove({_id: id});
      }
}
