import { UserType } from "data/users";
import { RequestListener } from "http";
import users from "../data/users";
import { randomUUID } from "crypto";
import { handleError } from "../services/handleError";
import { getBody } from "../services/getBody";

const WRONG_CONTENT_TYPE = 'type content should be "application/json"';

export const postHandler: RequestListener = (req, res) => {
  if (req.headers["content-type"] !== "application/json") {
    handleError(400, WRONG_CONTENT_TYPE, res);
    return;
  }
  getBody(req, res, (body) => {
    const addedUser: UserType = { ...body, id: randomUUID() };
    users.addUser(addedUser);
    res
      .writeHead(201, { "content-type": "application/json" })
      .end(JSON.stringify(addedUser));
  });
};
