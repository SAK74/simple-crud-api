import { ServerResponse } from "http";

export const handleError = (
  code: number,
  mess: string,
  resp: ServerResponse
) => {
  resp.writeHead(code, mess, { "content-type": "plain/text" }).end(mess);
};
