import { faker } from "@faker-js/faker";
import { factory, primaryKey } from "@mswjs/data";

interface UserInput {
  name: string;
  username: string;
  city: string;
  email: string;
}

interface User extends UserInput {
  id: string;
}

export const db = factory({
  // Create a "user" model,
  user: {
    id: primaryKey(String),
    name: String,
    username: String,
    city: String,
    email: String,
  },
});

let id = 0;

export const generateUserId = () => String(id++);

export function generateUsers(count = 10) {
  [...Array(count)].fill(null).forEach(() =>
    db.user.create({
      id: generateUserId(), // could be uuid instead
      name: faker.name.fullName(),
      username: faker.internet.userName(),
      city: faker.address.city(),
      email: faker.internet.email(),
    })
  );
}

generateUsers(5);

export type { User, UserInput };
