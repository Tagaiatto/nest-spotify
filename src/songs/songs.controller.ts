import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
    
    @Get()
    findAll() {
        return this.songsService.findAll();
    }

    @Post()
    create() {
        return this.songsService.create('Chasing the Dragon - Epica');
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
