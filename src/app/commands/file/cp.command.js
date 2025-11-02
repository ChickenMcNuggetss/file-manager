import { FileService } from "#domain/services/file-service.js";

export class CopyCommand{

  /**
   * 
   * @param {{[key: string]: any}} services 
   */
  constructor(services) {
    console.log(services);
    this.fsService = services.fsService;
  }

  /**
   * @param {string} args
   */
  async execute(args) {
    return await this.fsService.cp(args);
  }

}