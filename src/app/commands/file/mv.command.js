import path from 'path';

export class MoveCommand {
  /**
   * @param {{[key: string]: any}} services
   */
  constructor(services) {
    this.fsService = services.fileService;
  }

  /**
   * @param {string[]} args
   */
  async execute(args) {
    if (path.dirname(args[0]) === args[1]) {
      return;
    }
    const fileName = path.basename(args[0]);
    const destPath = path.join(args[1], fileName);
    const readStream = this.fsService.createReadStream(args[0]);
    const writeStream = this.fsService.createWriteStream(destPath);
    readStream.pipe(writeStream);
    this.fsService.remove(args[0]);
  }
}
