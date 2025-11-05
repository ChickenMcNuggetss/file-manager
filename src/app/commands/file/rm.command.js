export class RemoveCommand {
  /**
   *
   * @param {{[key: string]: any}} services
   */
  constructor(services) {
    this.fsService = services.fileService;
  }

  /**
   * @param {string[]} args
   */
  async execute(args) {
    const path = args[0];
    return await this.fsService.remove(path);
  }
}