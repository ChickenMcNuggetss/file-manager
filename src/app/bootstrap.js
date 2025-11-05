import { app } from './app.js';
import { CliRunner } from './cli/cli-runner.js';

export async function bootstrap() {
  const router = app.start();
  const cli = new CliRunner(router);
  cli.onInit();
}
