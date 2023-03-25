import { NextPage } from "next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Card } from "components/Card";
import { UserForm } from "components/UserForm";
import {
  getRunningQueriesThunk,
  getUserById,
  useEditUserMutation,
  useGetUserByIdQuery,
} from "features/users/usersApi";
import { wrapper } from "store";
import { UserInput } from "mocks";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (req) => {
    const userId = req.query.userId as string;
    const { server } = await import("../../mocks/server");
    server.listen();

    store.dispatch(getUserById.initiate(userId));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

const EditUser: NextPage = () => {
  const [editUser] = useEditUserMutation();
  const { push, query } = useRouter();

  const userId = query.userId as string;

  const { data } = useGetUserByIdQuery(userId);

  const handleSubmit = async (values: UserInput) => {
    try {
      const result = await editUser({ user: values, id: userId }).unwrap();

      if (result?.user) {
        push("/home");
        toast(`User: ${result.user.username} edited successfully`, {
          type: "success",
        });
      }
    } catch (err) {
      toast("Failed to edit a user", { type: "error" });
    }
  };

  return (
    <Card>
      <Card.Header>
        <h1>Edit User</h1>
      </Card.Header>

      <Card.Content>
        <UserForm defaultValues={data?.user} onSubmit={handleSubmit} />
      </Card.Content>
    </Card>
  );
};

export default EditUser;
