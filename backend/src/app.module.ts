import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { JwtModule } from "@nestjs/jwt";
import { secret } from "./utils/constants";
import { join } from "path/posix";
import { ServeStaticModule } from "@nestjs/serve-static";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/user.service";
import { User, UserSchema } from "./model/user.schema";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/:${process.env.DB_DATABASE}`
    ),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: "2h" },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
