import { useRouter } from "next/router";
import { UserInput } from "mocks";
import { FormProvider, useForm } from "react-hook-form";
import { StyledUserForm } from "./UserForm.styled";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { ButtonGroup, Button } from "components/Button";
import { ControlledInput } from "components/ControlledInput.tsx";
import { UserResolver } from "schema/UserResolver";

interface UserFormProps {
  defaultValues?: UserInput;
  onSubmit: (data: UserInput) => void;
}

const resolver = classValidatorResolver(UserResolver);

export function UserForm({ defaultValues, onSubmit }: UserFormProps) {
  const { push } = useRouter();
  const methods = useForm<UserInput>({ resolver, defaultValues });
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  return (
    <FormProvider {...methods}>
      <StyledUserForm>
        <ControlledInput<UserInput> label="Name" fieldName="name" />
        <ControlledInput<UserInput> label="Username" fieldName="username" />
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

        <Button disabled={!isDirty} onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </ButtonGroup>
    </FormProvider>
  );
}
