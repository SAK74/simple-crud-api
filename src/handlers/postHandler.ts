import { UserType } from "data/users";
import { RequestListener } from "http";
import users from "../data/users";
import { randomUUID } from "crypto";
import { handleError } from "../services/handleError";

const WRONG_CONTENT_TYPE = 'type content should be "application/json"';
const DOESNT_CONTAIN_REQ = "body doesn't contain required fields";

export const postHandler: RequestListener = (req, res) => {
  if (req.headers["content-type"] !== "application/json") {
    handleError(400, WRONG_CONTENT_TYPE, res);
    return;
  }

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    const bodyObj = JSON.parse(body) as Omit<UserType, "id">;
    if (!bodyObj.age || !bodyObj.username || !bodyObj.hobbies) {
      handleError(400, DOESNT_CONTAIN_REQ, res);
    } else {
      const addedUser: UserType = { ...bodyObj, id: randomUUID() };
      users.addUser(addedUser);
      res
        .writeHead(201, { "content-type": "application/json" })
        .end(JSON.stringify(addedUser));
    }
  });
};
