import { Path, useFormContext } from "react-hook-form";
import { StyledErrorMessage, StyledLabel } from "../UserForm/UserForm.styled";

interface ControlledInputProps<T> extends React.HTMLProps<HTMLInputElement> {
  label: string;
  fieldName: Path<T>;
}

// can be implemented without generics, but it will be less universal
export function ControlledInput<T>(props: ControlledInputProps<T>) {
  const { label, fieldName, ...rest } = props;
  const { formState, register } = useFormContext();
  const message = (formState.errors[fieldName]?.message ?? "") as string;

  console.log({ formState, fieldName, message });

  return (
    <StyledLabel>
      {label}
      <input type="text" {...rest} {...register(fieldName)} />
      <StyledErrorMessage>{message}</StyledErrorMessage>
    </StyledLabel>
  );
}
