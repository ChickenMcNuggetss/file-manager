import { FileService } from "#domain/services/file-service.js";
import process from 'process';
import path from 'path';

export class AddCommand{

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
    const fileName = args[0];
    const cwd = process.cwd();
    const filePath = path.join(cwd, fileName);
    return await this.fsService.open(filePath);
  }

}