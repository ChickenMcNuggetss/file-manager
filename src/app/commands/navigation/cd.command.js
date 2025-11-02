import { FileService } from '#domain/services/file-service.js';
import process from 'process';

export class CdCommand {
  constructor() {
  }

  /**
   * @param {string} path
   */
  async execute(path) {
    return process.chdir(path);
  }
}
