import { Stats, createReadStream, createWriteStream } from 'fs';
import { readdir, stat, rm, open } from 'node:fs/promises';

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

  /**
   * @param {import("fs").PathLike} path
   * @param {BufferEncoding} encoding 
   */
  createReadStream(path, encoding) {
    return createReadStream(path, encoding);
  }

    /**
   * @param {import("fs").PathLike} path
   * @param {BufferEncoding} encoding 
   */
  createWriteStream(path, encoding) {
    return createWriteStream(path, encoding);
  }

  /**
   * @param {import("fs").PathLike} path
   */
  async open(path) {
    return await open(path, 'w');
  }

  async mkdir(path) {

  }
}
