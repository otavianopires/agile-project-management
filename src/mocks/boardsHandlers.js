import { rest } from "msw";
import data from "./data.json";

export const boardsHandlers = [
  // Retrieve all boards.
  rest.get('/board', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data),
    )
  }),
  // Retrieve all boards.
  rest.get('/boards', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.boards),
    )
  }),
]