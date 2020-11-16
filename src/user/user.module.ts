import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { UserController } from '../user/user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [UserService],
})
export class UserModule {}
