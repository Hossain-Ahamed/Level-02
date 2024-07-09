import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  PORT: process.env.PORT,
  database_URL: process.env.DATABASE_URL,
  bcrypt_salt_round : process.env.BSCRYPT_SALT_ROUND,
  default_password : process.env.DEFAULT_PASS,
  NODE_ENV : process.env.NODE_ENV
};
