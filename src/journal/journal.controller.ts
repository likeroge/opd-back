import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JournalService } from './journal.service';
import { CreateJournalDto } from './dto/CreateJournal.dto';

@Controller('journal')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}
  @Get('/find/:id')
  async getJournalById(@Param('id') id: number) {
    return await this.journalService.getJournalById(Number(id));
  }

  @Get()
  async getAllJournals() {
    return await this.journalService.getAllJournals();
  }

  @Get('last')
  async getLastCreatedJournal() {
    return await this.journalService.getLastCreatedJournal();
  }

  @Post()
  async createJournal(@Body() createJournalDto: CreateJournalDto) {
    return await this.journalService.createJournal(
      createJournalDto.userId,
      createJournalDto.text,
    );
  }
}
