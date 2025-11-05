import { FileService } from '#domain/services/file-service.js';
import process from 'process';

export class CdCommand {
  constructor() {
  }

  /**
   * @param {string[]} args
   */
  async execute(args) {
    const path = args[0];
    return process.chdir(path);
  }
}
