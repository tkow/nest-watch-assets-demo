import { Module } from '@nestjs/common';
import { AppCommand } from './app.command';
import { AppService } from './app.service';

@Module({
  imports: [],
  providers: [AppCommand, AppService],
})
export class AppModule {}
