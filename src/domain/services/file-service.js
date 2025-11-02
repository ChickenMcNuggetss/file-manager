import { FileSystemAdapter } from '#infrastructure/fs-adapter.js';

export class FileService {
  constructor() {
    this.fsAdapter = new FileSystemAdapter();
  }

  /**
   * @param {string} args
   */
  async delete(args) {
    return await this.fsAdapter.remove(args);
  }

  /**
   * @param {import("fs").PathLike} path
   */
  async cd(path) {
    // @ts-ignore
    return await this.fsAdapter.cd(path);
  }

  /**
   * @param {import("fs").PathLike} path
   */
  async readdir(path) {
    return await this.fsAdapter.readdir(path);
  }

  /**
   * @param {import("fs").PathLike} path
   */
  async stat(path) {
    return await this.fsAdapter.stat(path);
  }

  /**
   * @param {import("fs").PathLike} path
   */
  async remove(path) {
    return await this.fsAdapter.remove(path);
  }

  /**
   * @param {import("fs").PathLike} path
   * @param {BufferEncoding} encoding
   */
  createReadStream(path, encoding) {
    return this.fsAdapter.createReadStream(path, encoding);
  }

  /**
   * @param {import("fs").PathLike} path
   * @param {BufferEncoding} encoding
   */
  createWriteStream(path, encoding) {
    return this.fsAdapter.createWriteStream(path, encoding);
  }

  /**
   * @param {import("fs").PathLike} path
   */
  async open(path) {
    return await this.fsAdapter.open(path);
  }
}
