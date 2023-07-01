import { RequestListener } from "http";
import { postHandler } from "./postHandler";
import { getHandler } from "./getHandler";
import { handleError } from "../services/handleError";
import { deleteHandler } from "./deleteHandler";

export const serverListener: RequestListener = (req, res) => {
  req.on("error", (err) => {
    handleError(500, err.message, res);
    return;
  });
  if (!req.url?.startsWith("/api/users")) {
    handleError(404, "Is nothing here...", res);
    return;
  }
  switch (req.method) {
    case "POST":
      postHandler(req, res);
      break;
    case "GET":
      getHandler(req, res);
      break;
    case "DELETE":
      deleteHandler(req, res);
      break;
    default:
      handleError(500, `unhandled method: ${req.method}`, res);
  }
};
