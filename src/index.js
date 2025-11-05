import process from 'process';
import { bootstrap } from '#app/bootstrap.js';

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});