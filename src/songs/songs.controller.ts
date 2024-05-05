import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll() {
        return 'Find all SongsController';
    }
    
    @Post()
    create() {
        return 'Create a new song SongsController';
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
