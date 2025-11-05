import { createHash } from "node:crypto";

export class CryptoAdapter {

  createHash() {
    return createHash("sha256");
  }
}