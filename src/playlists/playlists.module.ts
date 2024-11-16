import { Module } from "@nestjs/common";
import { PlayListsController } from "./playlists.controller";

import { TypeOrmModule } from "@nestjs/typeorm";
import { Playlist } from "./entities/playlists.entity";
import { PlayListsService } from "./playlists.service";
import { Song } from "src/songs/entities/songs.entity";
import { User } from "src/users/entities/users.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Playlist, Song, User])],
    controllers: [PlayListsController],
    providers: [PlayListsService],
})
export class PlayListModule { }