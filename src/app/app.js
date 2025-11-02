import { FileService } from '#domain/services/file-service.js';
import { ErrorService } from '#shared/services/errors-service.js';
import { CommandRouter } from '#app/cli/command-router.js';
import { CdCommand } from '#app/commands/navigation/cd.command.js';
import { ExitCommand } from '#app/commands/navigation/exit.command.js';
import { ListCommand } from '#app/commands/navigation/ls.command.js';
import { UpCommand } from '#app/commands/navigation/up.command.js';
import { RemoveCommand } from '#app/commands/file/rm.command.js';

class App {
  start() {
    const services = {
      fileService: new FileService(),
      errorService: new ErrorService(),
    };

    const commands = {
      cd: new CdCommand(),
      up: new UpCommand(),
      '.exit': new ExitCommand(),
      ls: new ListCommand(services),
      rm: new RemoveCommand(services),
    };

    const router = new CommandRouter(commands, services.errorService);
    return router;
  }
}

export const app = new App();
