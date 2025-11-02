import { Stats } from 'node:fs';
import { readdir, stat, rm } from 'node:fs/promises';

export class FileSystemAdapter {

  /**
   * @param {import("fs").PathLike} path
   */
  async readdir(path) {
    return await readdir(path);
  }

  /**
   * @param {import("fs").PathLike} path
   * @returns {Promise<Stats>}
   */
  async stat(path) {
    return await stat(path);
  }

  /**
   * @param {import("fs").PathLike} path
   */
  async remove(path) {
    return await rm(path);
  }
}
