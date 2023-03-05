import { useRouter } from "next/router";
import { Button } from "components/Button";
import { User } from "mocks";

interface EditUserButtonProps {
  userId: User["id"];
}

export function EditUserButton({ userId }: EditUserButtonProps) {
  const { push } = useRouter();

  return (
    <Button color="secondary" onClick={() => push(`/edit/${userId}`)}>
      Edit
    </Button>
  );
}
