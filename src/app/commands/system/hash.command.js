export class HashCommand {
  /**
   * @param {{[key: string]: any}} services
   */
  constructor(services) {
    this.fsService = services.fileService;
    this.hashService = services.hashService;
  }

  /**
   * @param {string[]} args
   */
  async execute(args) {
    const path = args[0];
    const hash = this.hashService.createHash();
    const stream = await this.fsService.createReadStream(path, 'utf-8');
    stream.on('data', (/** @type {Buffer | string} */ chunk) => {
      hash.update(chunk);
    });
    stream.on('close', () => {
      console.log(hash.digest('hex'));
    });
  }
}
