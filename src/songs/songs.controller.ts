import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    
    @Get()
    findAll() {
        try {
            return this.songsService.findAll();

        } catch (error) {
            throw new HttpException(
                'Try Again Later', 
                HttpStatus.INTERNAL_SERVER_ERROR, 
                {
                    cause: error
                }
            );
        }
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
