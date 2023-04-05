import { rest } from "msw";
import data from "./data.json";

export const tasksHandlers = [
  // Retrieve all tasks.
  rest.get('/tasks', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.tasks),
    )
  }),

  // Retrieve all task status options.
  rest.get('/tasks-status', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.taskStatus),
    )
  }),

  // Retrieve all task type options.
  rest.get('/tasks-types', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.taskTypes),
    )
  }),
]