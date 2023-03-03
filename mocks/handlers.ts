// src/mocks/handlers.js
import { rest } from "msw";
import { db } from "./db";

export const handlers = [
  rest.get("https://test-api.com/api/user/getUsers", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: db.user.findMany({}),
      })
    );
  }),
];
