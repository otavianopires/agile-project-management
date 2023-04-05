import { rest } from "msw";
import data from "./data.json";

export const usersHandlers = [
  // Retrieve all users.
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.users),
    )
  }),
]