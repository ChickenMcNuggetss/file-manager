import { FileSystemAdapter } from '#infrastructure/fs-adapter.js';
import { cp } from 'fs';

export class FileService {
  
  constructor() {
    this.fsAdapter = new FileSystemAdapter();
  }

  /**
   * @param {string} args
   */
  async delete(args) {
    return  await this.fsAdapter.remove(args);
  }
}