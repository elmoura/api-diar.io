import 'dotenv/config';
import '@database/connection';
import { app as appVars } from '@config/vars';
import { app as appInstance } from './app';

appInstance.listen(appVars.port, () =>
  console.log(`Server running at port ${appVars.port}`),
);
