import { MockedRequest, RestRequest, rest } from "msw";
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

  rest.get("https://test-api.com/api/user/getUser/:id", (req, res, ctx) => {
    const id = req.params.id as string;

    const user = db.user.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    return res(
      ctx.status(200),
      ctx.json({
        user,
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

  rest.post(
    "https://test-api.com/api/user/edit/:id",
    (req: RestRequest<CreateUserBody>, res, ctx) => {
      const id = req.params.id as string;
      const { user } = req.body;

      const editedUser = db.user.update({
        where: {
          id: {
            equals: id,
          },
        },
        data: user,
      });
      const users = db.user.getAll();

      return res(
        ctx.status(200),
        ctx.json({
          user: editedUser,
          users,
        })
      );
    }
  ),
];
