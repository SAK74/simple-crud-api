import { RequestListener, IncomingMessage, ServerResponse } from "http";
import { postHandler } from "./postHandler";
import { getHandler } from "./getHandler";
import { URL } from "url";

export const serverListener: RequestListener = (req, res) => {
  console.log("request: ", req.method);
  // res.writeHead(200, "resp ok", { "Content-Type": "application/json" });
  // const someJson = JSON.stringify({ a: "asd" });
  // res.end(someJson);
  // const url = new URL(req.url!, "http://localhost");
  // console.log(url);
  if (!req.url?.startsWith("/api/users")) {
    res.statusCode = 404;
    res.end("Is nothing here...");
  } else {
    switch (req.method) {
      case "POST":
        postHandler(req, res);
        break;
      case "GET":
        getHandler(req, res);
        break;
      default:
        res
          .writeHead(500, "unhandled method")
          .end("unhandled method: " + req.method);
    }
  }
};
