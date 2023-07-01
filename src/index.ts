import { createServer } from "node:http";
import "dotenv/config";
import { serverListener } from "./handlers/coreHandler";
import { randomUUID } from "crypto";
// import { validate } from "uuid";

// const myId = randomUUID();
// console.log("validate: ", validate(""));

const PORT = Number(process.env.PORT) || 4000;

const server = createServer(serverListener);

server.listen(PORT, () => {
  console.log("Server started in port ", PORT);
});
