import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {

    @Prop({required:true})
    name: string;

    @Prop({default: Date.now() })
    createdDate: Date;

}
export const GenreSchema = SchemaFactory.createForClass(Genre)