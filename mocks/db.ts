// src/mocks/db.js
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

// Generate 10 users
[...Array(10)].fill(null).forEach(() =>
  db.user.create({
    id: faker.datatype.uuid(),
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
