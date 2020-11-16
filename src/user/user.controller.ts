import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/models/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    
    @Post()
    createUser(@Body() body: UserCreateDto) {
        return this.userService.createUser(body)
    }
}
