export class CommandParser {
  /**
   * @param {string} line
   */
  parse(line) {
    const tokens = line.trim().split(/\s+/);
    const command = tokens.shift()?.toLowerCase();
    return { command, args: tokens };
  }
}