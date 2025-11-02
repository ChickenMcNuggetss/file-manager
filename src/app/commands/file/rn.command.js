import path from 'path';

export class RenameCommand {
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
    const {from, to} = {from: args[0], to: args[1]};
    const dir = path.dirname(from);
    const newPath = path.join(dir, to);
    return await this.fsService.rename(from, newPath);
  }
}