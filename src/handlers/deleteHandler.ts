import { RequestListener } from "http";
import { getID } from "../services/getId";
import data from "../data/users";
import { validateId } from "../services/validateId";

export const deleteHandler: RequestListener = (req, res) => {
  const id = getID(req.url);

  validateId(id, res, (_id) => {
    data.deleteUser(_id);
    res.writeHead(204, "user has deleted").end();
  });
};
