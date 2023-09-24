import { AppService } from './app.service';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'hello',
})
export class AppCommand extends CommandRunner {
  constructor(private appService: AppService) {
    super();
  }

  async run(): Promise<void> {
    console.log(this.appService.getHello());
  }
}
