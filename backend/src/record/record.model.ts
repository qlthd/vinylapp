import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import { Genre } from "src/genre/genre.model";

export type RecordDocument = Record & Document;

@Schema()
export class Record {

    @Prop({required:true})
    name: string;

    @Prop({required:true})
    releaseDate: Date;

    @Prop({default: Date.now() })
    createdDate: Date;

    @Prop({required:true})
    genres: Genre[];
}
export const RecordSchema = SchemaFactory.createForClass(Record)