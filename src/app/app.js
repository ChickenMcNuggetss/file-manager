import { FileService } from "#domain/services/file-service.js";
import { ErrorService } from "#shared/services/errors-service.js";
import { CommandRouter } from "./cli/command-router.js";

class App {
  services = {
    fileService: new FileService(),
    errorService: new ErrorService(),
  }

  commands = {
    // cp: new CopyCommand(services),
  };

  router = new CommandRouter(this.commands, this.services.errorService);
 
  start() {
    return this.router;
  }
}

export const app = new App();