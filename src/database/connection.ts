import { Connection, createConnection } from 'typeorm';
import { mongo } from '../config/vars';

let connection: Connection;

(async () => {
  connection = await createConnection({
    type: 'mongodb',
    url: mongo.url,
  });

  console.log('Connected to Mongo');
})();

export { connection };
