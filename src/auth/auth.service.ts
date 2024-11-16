import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from './dto/login-dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/entities/users.entity';
import { JwtService } from '@nestjs/jwt';
import { ArtistsService } from 'src/artists/artists.service';
import { PayloadType } from './types/payload.type';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
        private artistService: ArtistsService
    ) {}

    async login(loginDTO: LoginDTO): Promise<{ accessToken: string }> {
        const user = await this.usersService.findOne(loginDTO);
        const passwordMatched = await bcrypt.compare(
            loginDTO.password,
            user.password
        );
        if(passwordMatched){
            delete user.password;
            // return user;
            const payload: PayloadType = { email: user.email, userId: user.id };
            const artist = await this.artistService.findArtist(user.id);
            if(artist){
                payload.artistId = artist.id;
            }
            return {
                accessToken: this.jwtService.sign(payload)
            };
        } else {
            throw new UnauthorizedException('Invalid username or password');
        }
    }
}
