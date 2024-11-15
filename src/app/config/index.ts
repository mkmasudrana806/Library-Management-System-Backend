import dotenv from "dotenv";
import path from "path";

// By default, config will look for a file called `.env` in the current working directory.
// as this file and `.env` files are not in the same directory, we need to specify the `.env` path
const result = dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const config = {
  app_port: process.env.PORT,
  default_password: process.env.DEFAULT_PASSWORD,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  node_environment: process.env.NODE_ENVIRONMENT,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
};

export default config;

// config will read your .env file, parse the contents, assign it to process.env, and return an Object with a parsed key containing the loaded content or an error key if it failed.
if (result.error) {
  console.log("error while parsing environment variable: ", result.error);
}
