import { EOL, cpus } from 'node:os';


export class OsAdapter {

  getEOL() {
    return EOL;
  }

  getCPUs() {
    return cpus();
  }
}