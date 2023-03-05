import { Path, useFormContext } from "react-hook-form";
import { StyledErrorMessage, StyledLabel } from "../UserForm/UserForm.styled";
import { StyledControlledInput } from "./ControlledInput.styled";

// Omit to fix TS error in styled components
interface ControlledInputProps<T>
  extends Omit<React.HTMLProps<HTMLInputElement>, "as"> {
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
      <StyledControlledInput type="text" {...rest} {...register(fieldName)} />
      <StyledErrorMessage>{message}</StyledErrorMessage>
    </StyledLabel>
  );
}
