import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';
import { Song } from './entities/songs.entity';
import { UpdateSongDTO } from './dto/update-song-dto';
import { UpdateResult } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';

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
    findAll(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe)
        page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
        limit: number = 10
    ): Promise<Pagination<Song>> {
        try {
            limit = limit > 100 ? 100 : limit;
            return this.songsService.paginate({ page, limit });

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
    id: number): Promise<Song> {
        return this.songsService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.songsService.remove(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateSongDTO: UpdateSongDTO,
    ): Promise<UpdateResult> {
        return this.songsService.update(id, updateSongDTO);
    }


}
