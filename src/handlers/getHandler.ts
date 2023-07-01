import { RequestListener } from "http";
import data, { UserType } from "../data/users";
import { handleError } from "../services/handleError";
import { getID } from "../services/getId";

export const getHandler: RequestListener = (req, resp) => {
  const id = getID(req.url);
  if (typeof id === "undefined") {
    resp
      .writeHead(200, { "content-type": "application/json" })
      .end(JSON.stringify(data.users));
  } else {
    if (!id) {
      handleError(400, "invalid id", resp);
      return;
    }
    let _user: UserType | undefined;
    if ((_user = data.findUser(id))) {
      resp
        .writeHead(200, { "content-type": "application/json" })
        .end(JSON.stringify(_user));
    } else {
      handleError(404, "user don't exist", resp);
    }
  }
};
