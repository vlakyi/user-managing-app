import { Length, IsEmail } from "class-validator";
import { UserInput } from "mocks";

// can be used in a shared library on frontend and backend
class UserResolver implements UserInput {
  @Length(2, 30)
  userName: string;

  @IsEmail({}, { message: "invalid email" })
  email: string;

  @Length(2, 30)
  city: string;

  @Length(2, 30)
  name: string;
}

export { UserResolver };
