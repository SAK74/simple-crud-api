import { RequestListener } from "http";
import data from "../data/users";

export const getHandler: RequestListener = (req, resp) => {
  console.log(req.url);
  resp
    .writeHead(200, { "content-type": "application/json" })
    .end(JSON.stringify(data.users));
};
