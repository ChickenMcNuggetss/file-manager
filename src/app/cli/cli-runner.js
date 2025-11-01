import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import process from 'process';
import { CommandRouter } from './command-router.js';
import { CommandParser } from './command-parser.js';

export class CliRunner {
   /**
   * @param {CommandRouter} router
   */
  constructor(router) {
    this.router = router;
    this.parser = new CommandParser();
  }

  onInit() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    rl.prompt();

    rl.on('line', async (line) => {
      // parse chunk? to command and args
      const {command, args} = this.parser.parse(line);
      this.router.route(command, args);
      console.log(line);
      console.log('Welcome to the File Manager');
      rl.prompt();
      console.log('Current directory:', process.cwd());
      rl.prompt();
    });

    rl.on('close', () => {
      process.exit(0);
    });
  }
}