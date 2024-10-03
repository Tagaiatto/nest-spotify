import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { authConstants } from './auth.constants';

@Module({
    imports: [UsersModule, JwtModule.register({ 
        secret: authConstants.secret,
        signOptions: { expiresIn: '1d' }
    })],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {}
