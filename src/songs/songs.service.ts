import { Injectable } from '@nestjs/common';
import { Song } from './entities/songs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
    private readonly songs = [];

    constructor(
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ) {}

    async create(songDTO: CreateSongDTO): Promise<Song> {
        const song = new Song;
        song.title = songDTO.title;
        song.artists = songDTO.artists;
        song.duration = songDTO.duration;
        song.lyrics = songDTO.lyrics;
        song.releasedDate = songDTO.releasedDate;

        return await this.songRepository.save(song);
    }

    findAll(): Promise<Song[]>{
        return this.songRepository.find();
    }

    findOne(id:number): Promise<Song> {
        return this.songRepository.findOneBy({ id });
    }
}
