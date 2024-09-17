import { Injectable } from '@nestjs/common';
import { Song } from './entities/songs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
    private readonly songs = [];

    constructor(
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ) {}

    create(song){
        this.songs.push(song);
        return this.songs;
    }

    findAll(){
        return this.songs;
    }
}
