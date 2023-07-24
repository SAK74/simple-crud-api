import { RequestListener } from "http";
import { getID } from "../services/getId";
import { validateId } from "../services/validateId";
import data from "../data/users";
import { getBody } from "../services/getBody";

export const putHandler: RequestListener = (req, resp) => {
  const id = getID(req.url);
  validateId(id, resp, (_id) => {
    getBody(req, resp, (body) => {
      data.changeUser(_id, body);
      resp
        .writeHead(201, { "content-type": "application/json" })
        .end(JSON.stringify({ ...body, id: _id }));
    });
  });
};
