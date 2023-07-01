import { RequestListener } from "http";
import data from "../data/users";
import { getID } from "../services/getId";
import { validateId } from "../services/validateId";

export const getHandler: RequestListener = (req, resp) => {
  const id = getID(req.url);
  if (typeof id === "undefined") {
    resp
      .writeHead(200, { "content-type": "application/json" })
      .end(JSON.stringify(data.users));
  } else {
    validateId(id, resp, (_id, _user) => {
      resp
        .writeHead(200, { "content-type": "application/json" })
        .end(JSON.stringify(_user));
    });
  }
};
