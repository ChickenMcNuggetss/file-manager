import { OsAdapter } from '#infrastructure/os-adapter.js';

export class OsService {
  constructor() {
    this.osAdapter = new OsAdapter();
  }

  getEOL() {
    return this.osAdapter.getEOL();
  }

  getCPUs() {
    return this.osAdapter.getCPUs();
  }
}
