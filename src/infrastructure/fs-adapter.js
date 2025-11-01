import { rm, readdir } from 'node:fs/promises';

export class FileSystemAdapter {
  /**
   * @param {string} path
   */
  async remove(path) {
    try {
      await rm(path);
    } catch(e) {
      console.log(e);
    }
  }

  /**
   * @param {import("fs").PathLike} dir
   */
  async readdir(dir) {
    return readdir(dir);
  }
}