import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JournalService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllJournals() {
    return await this.prisma.journal.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async getJournalById(id: number) {
    return await this.prisma.journal.findUnique({ where: { id: id } });
  }

  async getLastCreatedJournal() {
    return await this.prisma.journal.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async createJournal(user_id: number, text: string) {
    return await this.prisma.journal.create({
      data: {
        userId: user_id,
        text: text,
      },
    });
  }
}
