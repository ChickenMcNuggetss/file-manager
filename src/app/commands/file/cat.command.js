import { EOL } from 'node:os';
import { stdout } from 'node:process';
export class CatCommand {
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
    return await this.fsService.createReadStream(path, 'ascii').on('data',
      /**
       * @param {string | Buffer<ArrayBufferLike>} chunk 
       */
      (chunk) => {
      stdout.write(chunk + EOL)
    });
  }
}