export class CommandRouter {

  /**
   * @param {{}} commands
   * @param {import("#shared/services/errors-service.js").ErrorService} errorService
   */
  constructor(commands, errorService) {
    this.commands = commands;
    this.errorService = errorService
  }

  /**
   * @param {string} name
   * @param {string[]} args
   */
  async route(name, args) {
    const command = this.commands[name];

    if (!command) {
      this.errorService.displayInvalidInputError();
      return;
    }

    try {
      await command.execute(args[0])
    } catch(error) {
      console.log(`Error: ${error}`);
    }
  }

}