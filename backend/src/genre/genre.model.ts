import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";
import { Record } from "src/record/record.model";

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {

    @Prop({required:true})
    name: string;

    @Prop({default: Date.now() })
    createdDate: Date;

    @Prop({ type: [{ type: 'ObjectId', ref: 'Record' }] })
    records: Record[];
}
export const GenreSchema = SchemaFactory.createForClass(Genre)