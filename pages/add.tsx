import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Card } from "components/Card";
import { UserForm } from "components/UserForm";
import { useCreateUserMutation } from "features/users/usersApi";

const AddUser: NextPage = () => {
  const [createUser, { isError, error, data }] = useCreateUserMutation();
  const { push } = useRouter();

  useEffect(() => {
    if (isError && error) {
      toast("Failed to create a user", { type: "error" });
    }
  }, [isError, error]);

  useEffect(() => {
    if (data?.user) {
      console.log({ data });
      toast(`User: ${data.user.userName} created successfully`, {
        type: "success",
      });
      push("/home");
    }
  }, [data, push]);

  return (
    <Card minWidth="300px">
      <Card.Header>
        <h1>Add User</h1>
      </Card.Header>

      <Card.Content>
        <UserForm onSubmit={createUser} />
      </Card.Content>
    </Card>
  );
};

export default AddUser;
