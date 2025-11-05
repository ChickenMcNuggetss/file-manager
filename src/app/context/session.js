import { parseArgs } from 'node:util';
class Session {
  /**
   * @type {string}
   */
  userName = 'Anonymous';

  setUserNameFromArguments() {
    const { values } = parseArgs({ strict: false });

    for (const [key, value] of Object.entries(values)) {
      if (key === 'username' && value && typeof value === 'string') {
        this.userName = value;
      }
    }
  }
}

export const session = new Session();
