import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';
import { Song } from './entities/songs.entity';

@Controller('songs')
export class SongsController {
    constructor(
        private songsService: SongsService,
        @Inject('CONNECTION')
        private connection: Connection
    ) {
        console.log(`SongsController constructor connection: ${JSON.stringify(this.connection)}`);
    }

    @Get()
    findAll(): Promise<Song[]> {
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
    create(@Body() createSongDTO: CreateSongDTO): Promise<Song> {
        return this.songsService.create(createSongDTO);
    }

    @Get(':id')
    findOne(@Param(
                'id', 
                new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
            ) 
            id: number) {
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
