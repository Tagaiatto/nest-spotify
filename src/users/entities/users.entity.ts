import { Playlist } from 'src/playlists/entities/playlists.entity';
import {
    Entity,    
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Playlist, (playList) => playList.user)
    playLists: Playlist[];

}