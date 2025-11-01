import process from 'process';

import("#app/bootstrap.js").catch((err) => {
  console.error(err);
  process.exit(1);
});