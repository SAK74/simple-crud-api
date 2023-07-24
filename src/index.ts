import { createServer } from "node:http";
import "dotenv/config";
import { serverListener } from "./handlers/coreHandler";

const PORT = Number(process.env.PORT);

try {
  const server = createServer(serverListener);
  server.listen(PORT, () => {
    console.log("Server started in port ", PORT);
  });
} catch (err) {
  console.error((err as Error).message);
}
