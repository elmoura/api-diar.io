export const app = {
  port: process.env.APP_PORT || '',
};

export const mongo = {
  url: process.env.MONGODB_URL || '',
};

export const crypt = {
  key: process.env.CRYPT_KEY || '',
  iv: process.env.CRYPT_IV || '',
};
