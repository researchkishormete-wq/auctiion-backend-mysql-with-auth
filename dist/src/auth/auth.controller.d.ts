import { AuthService } from './auth.service';
import { UserRole } from 'src/users/entities/user.entity';
declare class RegisterDto {
    email: string;
    password: string;
    role?: UserRole;
}
declare class LoginDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<any>;
    login(body: LoginDto): Promise<{
        access_token: string;
    } | {
        error: string;
    }>;
}
export {};
