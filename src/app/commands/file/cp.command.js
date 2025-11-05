import { FileService } from '#domain/services/file-service.js';

export class CopyCommand {
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
    const readStream = this.fsService.createReadStream(args[0]);
    const writeStream = this.fsService.createWriteStream(args[1]);
    readStream.pipe(writeStream);
  }
}
