import { UserType } from "data/users";
import { RequestListener } from "http";
import { parse } from "querystring";

const FORM_URLENCODED = "application/x-www-form-urlencoded";
const WRONG_CONTENT_TYPE =
  'type content should be "application/x-www-form-urlencoded"';
const DOESNT_CONTAIN_REQ = "body doesn't contain required fields";

export const postHandler: RequestListener = (req, res) => {
  if (req.headers["content-type"] !== FORM_URLENCODED) {
    res.writeHead(400, "wrong content type of request").end(WRONG_CONTENT_TYPE);
  }
  // console.log("from post handler", req.headers);
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    const bodyObj = parse(body) as unknown as Omit<UserType, "id">;
    console.log("body: ", bodyObj);
    if (!bodyObj.age || !bodyObj.username || !bodyObj.hobbies) {
      res.writeHead(400, DOESNT_CONTAIN_REQ).end(DOESNT_CONTAIN_REQ);
    } else {
      res.writeHead(401, "test message");
      res.end(JSON.stringify(bodyObj));
    }
    // res.end(JSON.stringify(bodyObj));
  });
};
