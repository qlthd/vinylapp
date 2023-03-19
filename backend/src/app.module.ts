import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { secret } from "./utils/constants";
import { join } from "path/posix";
import { ServeStaticModule } from "@nestjs/serve-static";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { User, UserSchema } from "./user/user.model";
import { ArtistModule } from './artist/artist.module';
import { ArtistService } from "./artist/artist.service";
import { ArtistController } from "./artist/artist.controller";
import { Artist, ArtistSchema } from "./artist/artist.model";

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://127.0.0.1:27017/local`),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: "2h" },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Artist.name, schema: ArtistSchema } ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    })
  ],
  controllers: [AppController, UserController, ArtistController],
  providers: [AppService, UserService, ArtistService],
})
export class AppModule {}
