import process from 'process';
import path from 'path';
import { Stats } from 'fs';

export class ListCommand {
  /**
   *
   * @param {{[key: string]: any}} services
   */
  constructor(services) {
    this.fsService = services.fileService;
  }

  async execute() {
    const cwd = process.cwd();
    try {
      const entities = await this.fsService.readdir(cwd);

      const files = [];
      const dir = [];
      for (const entity of entities) {
        const entityPath = path.resolve(entity);

        try {
          /**
           * @param {Stats} entityInfo
           */
          const entityInfo = await this.fsService.stat(entityPath);
          if (entityInfo.isFile()) {
            files.push({ name: entity, type: 'file' });
          } else if (entityInfo.isDirectory()) {
            dir.push({ name: entity, type: 'directory' });
          }
        } catch (e) {
          console.log(e);
        }
      }

      const res = [
        ...dir.sort((a, b) => a.name.localeCompare(b.name)),
        ...files.sort((a, b) => a.name.localeCompare(b.name)),
      ];
      this.createTable(res);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * @param {{name: string; type: string;}[]} res
   */
  createTable(res) {
    console.log(
      `${this.getIndentedString('(index)')} | ${this.getIndentedString('Type')} | ${this.getIndentedString('Name')}`
    );
    console.log('-'.repeat(70));
    res.map((entity, index) => {
      console.log(
        `${this.getIndentedString(index)} | ${this.getIndentedString(entity.name)} | ${this.getIndentedString(entity.type)}`
      );
    });
  }

  /**
   * @param {unknown} value
   */
  getIndentedString(value) {
    const cellLength = 20;
    const str = String(value);
    if (str.length >= cellLength) {
      return str.slice(0, cellLength - 3) + '...';
    }
    const totalPadding = cellLength - str.length;
    const leftPadding = Math.floor(totalPadding / 2);
    const rightPadding = totalPadding - leftPadding;

    return ' '.repeat(leftPadding) + str + ' '.repeat(rightPadding);
  }
}
