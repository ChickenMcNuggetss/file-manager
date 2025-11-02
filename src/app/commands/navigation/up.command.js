import process from 'process';
import path from 'path';

export class UpCommand {
  async execute() {
    const cwd = process.cwd();
    const { root, base, dir } = path.parse(cwd);
    if (root !== dir) {
      process.chdir(dir);
    }
  }
}
