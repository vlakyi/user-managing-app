import { MockedRequest, PathParams, RestRequest, rest } from "msw";
import { UserInput, db, generateUserId } from "./db";

interface CreateUserBody {
  user: UserInput;
}

export const handlers = [
  rest.get("https://test-api.com/api/user/getUsers", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: db.user.findMany({}),
      })
    );
  }),

  rest.post(
    "https://test-api.com/api/user/create",
    (req: MockedRequest<CreateUserBody>, res, ctx) => {
      const { user } = req.body;

      const newUser = db.user.create({ id: generateUserId(), ...user });
      const users = db.user.getAll();

      return res(
        ctx.status(200),
        ctx.json({
          user: newUser,
          users,
        })
      );
    }
  ),
];
