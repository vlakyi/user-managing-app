import { UserInput } from "mocks";
import { FormProvider, useForm } from "react-hook-form";
import { StyledUserForm } from "./UserForm.styled";
import { ButtonGroup, Button } from "components/Button";
import { useRouter } from "next/router";

import { IsEmail, Length } from "class-validator";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { ControlledInput } from "components/ControlledInput.tsx";

interface UserFormProps {
  defaultValues?: UserInput;
}

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

const resolver = classValidatorResolver(UserResolver);

export function UserForm({ defaultValues }: UserFormProps) {
  const { push } = useRouter();
  const methods = useForm<UserInput>({ resolver, defaultValues });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  console.log({ errors });

  const onSubmit = (data: UserInput) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <StyledUserForm>
        <ControlledInput<UserInput> label="Name" fieldName="name" />
        <ControlledInput<UserInput> label="Username" fieldName="userName" />
        <ControlledInput<UserInput>
          label="Email"
          fieldName="email"
          type="email"
        />
        <ControlledInput<UserInput> label="City" fieldName="city" />
      </StyledUserForm>

      <ButtonGroup>
        <Button variant="outlined" color="danger" onClick={() => push("/home")}>
          Cancel
        </Button>

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </ButtonGroup>
    </FormProvider>
  );
}
