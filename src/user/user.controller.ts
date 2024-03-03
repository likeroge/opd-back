import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/id/:id')
  async getUserById(id: number) {
    return await this.userService.getUserById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get('create/:email/:password')
  async createUser(
    @Param('email') email: string,
    @Param('password') password: string,
  ) {
    return await this.userService.createUser(email, password);
  }
}
