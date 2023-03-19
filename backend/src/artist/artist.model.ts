import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ArtistDocument = Artist & Document;

@Schema()
export class Artist {
    @Prop({required:true})
    name: string;
    @Prop({required:true})
    country: string;
    @Prop()
    activeSince: Date
    @Prop({default: Date.now() })
    createdDate: Date
}
export const ArtistSchema = SchemaFactory.createForClass(Artist)