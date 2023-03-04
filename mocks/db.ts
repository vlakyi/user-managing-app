import { faker } from "@faker-js/faker";
import { factory, primaryKey } from "@mswjs/data";

//id, name, username, city and email
export const db = factory({
  // Create a "user" model,
  user: {
    id: primaryKey(String),
    name: String,
    userName: String,
    city: String,
    email: String,
  },
});

let id = 0;

// Generate 10 users
[...Array(10)].fill(null).forEach(() =>
  db.user.create({
    id: String(id++), // could be uuid instead
    name: faker.name.fullName(),
    userName: faker.internet.userName(),
    city: faker.address.city(),
    email: faker.internet.email(),
  })
);

interface User {
  id: string;
  name: string;
  userName: string;
  city: string;
  email: string;
}

export type { User };
