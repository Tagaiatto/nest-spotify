import {
    User
} from 'src/users/entities/users.entity';

import {
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('artists')
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}