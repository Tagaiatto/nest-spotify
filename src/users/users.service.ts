import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/users.entity";
import * as bcrypt from "bcryptjs";
import { CreateUserDTO } from './dto/create-user-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async create(userDTO: CreateUserDTO): Promise<User> {
        const salt = await bcrypt.genSalt();
        userDTO.password = await bcrypt.hash(userDTO.password, salt);
        const user = this.userRepository.create(userDTO);
        delete user.password;
        return user;
    }
}
