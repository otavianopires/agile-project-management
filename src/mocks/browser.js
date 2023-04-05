import { setupWorker } from "msw";
import { tasksHandlers } from "./tasksHandlers";
import { boardsHandlers } from "./boardsHandlers";
import { usersHandlers } from "./usersHandlers";

export const worker = setupWorker(
  ...tasksHandlers,
  ...boardsHandlers,
  ...usersHandlers,
);