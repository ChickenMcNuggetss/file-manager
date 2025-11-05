import process from 'process';
import { session } from '#app/context/session.js';

export class ExitCommand {

  execute() {
    console.log(`Thank you for using File Manager, ${session.userName}, goodbye!`);
    process.exit(0);
  }
}