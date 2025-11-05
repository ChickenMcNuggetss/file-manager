import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import process from 'process';
import { CommandRouter } from './command-router.js';
import { CommandParser } from './command-parser.js';
import { session } from '../context/session.js';

export class CliRunner {
   /**
   * @param {CommandRouter} router
   */
  constructor(router) {
    this.router = router;
    this.parser = new CommandParser();
    this.session = session;
  }

  onInit() {
    const rl = readline.createInterface({ input: stdin, output: stdout });

    rl.prompt();
    this.session.setUserNameFromArguments();
    console.log(`Welcome to the File Manager, ${this.session.userName}!`);
    this.printCurrentDirectory();

    rl.on('line', async (line) => {
      const {command, args} = this.parser.parse(line);
      try {
        await this.router.route(command, args);
        rl.prompt();
        this.printCurrentDirectory();
      } catch(e) {
        console.log(e);
      }
      
      rl.prompt();
    });

    rl.on('close', () => {
      console.log(`Thank you for using File Manager, ${this.session.userName}, goodbye!`);
      rl.close();
      process.exit(0);
    });
  }

  printCurrentDirectory() {
    console.log('You are currently in', process.cwd());
  }
}