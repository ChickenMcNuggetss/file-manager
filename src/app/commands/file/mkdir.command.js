import { FileService } from "#domain/services/file-service.js";

export class MkdirCommand{

  /**
   * @param {{[key: string]: any}} services 
   */
  constructor(services) {
    this.fsService = services.fileService;
  }

  /**
   * @param {string} args
   */
  async execute(args) {
    return await this.fsService.mkdir(args[0]);
  }
}