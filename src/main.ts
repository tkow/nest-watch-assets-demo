import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  await CommandFactory.run(AppModule);
  // NOTE: The process can't exit if watchAssets: false and builder webpack if starting it using `nest start`.
  process.exit();
}
bootstrap();
