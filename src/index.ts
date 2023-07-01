import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import "dotenv/config";
import { serverListener } from "./handlers/coreHandler";

console.log("first test", randomUUID());

const PORT = Number(process.env.PORT) || 4000;

const server = createServer(serverListener);

server.listen(PORT, () => {
  console.log("Server started in port ", PORT);
});
