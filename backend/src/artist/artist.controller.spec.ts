import { Test, TestingModule } from "@nestjs/testing";
import { MongoMemoryServer } from "mongodb-memory-server";
import { Connection, connect, Model } from "mongoose";
import { getModelToken } from "@nestjs/mongoose";
import { ArtistService } from "./artist.service";
import { ArtistController } from "./artist.controller";
import { Artist, ArtistSchema } from "./artist.model";


describe("ArtistController", () => {
  let artistController: ArtistController;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let artistModel: Model<Artist>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    artistModel = mongoConnection.model(Artist.name, ArtistSchema);
    
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArtistController],
      providers: [
        ArtistService,
        {provide: getModelToken(Artist.name), useValue: artistModel},
      ],
    }).compile();
    artistController = app.get<ArtistController>(ArtistController);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  describe("create()", () => {
    it("should return the saved object", async () => {
      const artist = {
        _id: "1",
        name: "Aphex Twin",
        country: "England",
        activeSince: new Date(1985, 1),
        createdDate: new Date()
      };
      const createdArtist = await artistController.create(artist);
      expect(createdArtist.name).toBe(artist.name);
    });

    
  });

  describe("findByName()", () => {
    it("should return the corresponding saved object", async () => {
      const artist = {
        _id: "1",
        name: "Aphex Twin",
        country: "England",
        activeSince: new Date(1985, 1),
        createdDate: new Date()
      };
      await (new artistModel(artist).save());
      const article = await artistController.findByName(artist.name);
      expect(article.name).toBe(artist.name);
    });
    
  });

  

});


