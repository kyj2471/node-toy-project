import dotenv from 'dotenv';

dotenv.config();

export const config = {
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expireDate: process.env.JWT_EXPIRE_DATE
  },
  bcrypt: {
    saltRound: process.env.BCRYPT_SALT_ROUND
  },
  host: {
    port: process.env.PORT
  },
  db: {
    host: process.env.DB_HOST
  }
};
