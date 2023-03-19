import { ArtistService } from './artist.service';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Artist } from './artist.model';

@Controller('artist')
export class ArtistController {
    constructor(
        private readonly artistService: ArtistService
    ){}

  @Post()
  create(@Body() createArtist2Dto: Artist) {
    return this.artistService.create(createArtist2Dto);
  }

  @Get()
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtist: Artist) {
    return this.artistService.update(+id, updateArtist);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistService.remove(+id);
  }

    
}
