import { CryptoAdapter } from "#infrastructure/crypto-adapter.js";

export class HashService {
  constructor() {
    this.hashAdapter = new CryptoAdapter();
  }

  createHash() {
    return this.hashAdapter.createHash();
  }
}
