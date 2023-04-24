import { ArtistService } from './artist.service';
import { Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { Artist, ArtistDocument } from './artist.model';
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

const mockArtist = (
    name = 'DJ 1',
    _id = '1',
    country = 'UK',
    activeSince = new Date(1985, 1),
    createdDate = new Date()
  ): Artist => ({
    name,
    _id,
    country,
    activeSince,
    createdDate,
  });
  
  
  describe('ArtistService', () => {
    let artistService: ArtistService;
    let artistModel: Model<Artist>;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [
          ArtistService,
          {
            provide: getModelToken('Artist'),
            useValue: {
              find: jest.fn(),
              findOne: jest.fn(),
            },
          },
        ],
      }).compile();
  
      artistService = module.get<ArtistService>(ArtistService);
      artistModel = module.get<Model<Artist>>(getModelToken('Artist'));
    });
  
    describe('findAll', () => {
      it('should return all artists', async () => {
        const mockArtists = [mockArtist(), mockArtist('DJ 2', '2')];
  
        (artistModel.find as jest.Mock).mockReturnValue(mockArtists);
  
        const result = await artistService.findAll();
  
        expect(result).toEqual(mockArtists);
        expect(artistModel.find).toHaveBeenCalledTimes(1);
      });
    });

    describe('findByName', () => {
        it('should return the artist with the specified name', async () => {
            const mockArtists = [mockArtist(), mockArtist('DJ 1', '2')];
      
            (artistModel.findOne as jest.Mock).mockResolvedValue(mockArtists[0]);
      
            const result = await artistService.findByName('DJ 1');
      
            expect(result).toEqual(mockArtists[0]);
            expect(artistModel.findOne).toHaveBeenCalledTimes(1);
            expect(artistModel.findOne).toHaveBeenCalledWith({ name: 'DJ 2' });
      });
  });
});

