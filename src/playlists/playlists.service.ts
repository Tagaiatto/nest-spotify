import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Playlist } from "./entities/playlists.entity";
import { In, Repository } from "typeorm";
import { CreatePlayListDto } from "./dto/create-playlist-dto";
import { Song } from "src/songs/entities/songs.entity";

import { User } from "src/users/entities/users.entity";

@Injectable()
export class PlayListsService {
    constructor(
        @InjectRepository(Playlist)
        private playListRepo: Repository<Playlist>,

        @InjectRepository(Song)
        private songsRepo: Repository<Song>,

        @InjectRepository(User)
        private userRepo: Repository<User>
    ) { }
    async create(playListDTO: CreatePlayListDto): Promise<Playlist> {
        const playList = new Playlist();
        playList.name = playListDTO.name;

        
        const songs = await this.songsRepo.findBy({ id: In(playListDTO.songs) });
        
        playList.songs = songs;

        
        const user = await this.userRepo.findOneBy({ id: playListDTO.user });
        playList.user = user;

        return this.playListRepo.save(playList);
    }
}