import { ServerResponse } from "http";
import { validate } from "uuid";
import { handleError } from "./handleError";
import data, { UserType } from "../data/users";

export const validateId = (
  _id: string | undefined,
  res: ServerResponse,
  cb: (id: string, user: UserType) => void
) => {
  if (!_id || !validate(_id)) {
    handleError(400, "invalid id", res);
  } else {
    let _user: UserType | undefined;
    if ((_user = data.findUser(_id))) {
      cb(_id, _user);
    } else {
      handleError(404, "user don't exist", res);
    }
  }
};
