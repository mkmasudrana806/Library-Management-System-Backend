import { Server } from "http";
import app from "./app";
import config from "./app/config";

async function main() {
  // connect the server
  const server: Server = app.listen(config.app_port, () => {
    console.log("Server listening on port: ", config.app_port);
  });
}

main();
