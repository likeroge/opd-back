import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getUserById(id: number) {
    return await this.prisma.user.findUnique({ where: { id: id } });
  }
  async getUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email: email } });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async createUser(email: string, password: string) {
    try {
      const result = await this.prisma.user.create({
        data: { email: email, password: password },
      });
      return result;
    } catch (e) {
      return e.message;
    }
  }

  async registerUser(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto });
  }
}
