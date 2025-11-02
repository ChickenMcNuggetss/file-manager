export class RemoveCommand {
  /**
   *
   * @param {{[key: string]: any}} services
   */
  constructor(services) {
    this.fsService = services.fileService;
  }

  async execute(path) {
    return await this.fsService.remove(path);
  }
}