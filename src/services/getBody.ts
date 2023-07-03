import { UserWithoutId } from "../data/users";
import { IncomingMessage, ServerResponse } from "http";
import { handleError } from "./handleError";

const DOESNT_CONTAIN_REQ = "body doesn't contain required fields";

export const getBody = (
  req: IncomingMessage,
  resp: ServerResponse,
  cb: (user: UserWithoutId) => void
) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    const bodyObj = JSON.parse(body) as UserWithoutId;
    if (!bodyObj.age || !bodyObj.username || !bodyObj.hobbies) {
      handleError(400, DOESNT_CONTAIN_REQ, resp);
    } else {
      cb(bodyObj);
    }
  });
};
