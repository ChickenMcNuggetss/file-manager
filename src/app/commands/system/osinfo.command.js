export class OsCommand {
  /**
   * @param {{[key: string]: any}} services
   */
  constructor(services) {
    this.osService = services.osService;
  }

  /**
   * @param {string[]} args
   */
  execute(args) {
    if (args[0] === '--EOL') {
      console.log(JSON.stringify(this.osService.getEOL()));
    } else if (args[0] === '--cpus') {
      const cpus = this.osService.getCPUs();
      console.log(`Overall amount: ${cpus.length}`);
      cpus.map((/** @type {{ model: string; speed: number }} */ cpu) => {
        console.log(`model: ${cpu.model}, speed: ${cpu.speed / 1000}GHz`);
      });
    }
  }
}
