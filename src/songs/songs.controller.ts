import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    
    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Post()
    create(@Body() createSongDTO : CreateSongDTO) {
        return this.songsService.create(createSongDTO);
    }

    @Get(':id')
    findOne() {
        return 'Find one SongsController';
    }

    @Put(':id')
    update() {
        return 'Update one SongsController';
    }

    @Delete(':id')
    delete() {
        return 'Delete one SongsController';
    }
}
