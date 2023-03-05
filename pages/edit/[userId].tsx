import { useEffect } from "react";
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
  const [editUser, { isError, error, data }] = useEditUserMutation();
  const { push, query } = useRouter();

  const userId = query.userId as string;

  const {
    data: userData,
    error: fetchUserError,
    isError: isFetchUserError,
  } = useGetUserByIdQuery(userId);

  useEffect(() => {
    if (isFetchUserError && fetchUserError) {
      toast("Failed to fetch user details", { type: "error" });
    }
  }, [fetchUserError, isFetchUserError]);

  useEffect(() => {
    if (isError && error) {
      toast("Failed to edit a user", { type: "error" });
    }
  }, [isError, error]);

  useEffect(() => {
    if (data?.user) {
      push("/home");
      toast(`User: ${data.user.userName} edited successfully`, {
        type: "success",
      });
    }
  }, [data, push]);

  const handleSubmit = (values: UserInput) => {
    editUser({ user: values, id: userId });
  };

  return (
    <Card minWidth="300px">
      <Card.Header>
        <h1>Edit User</h1>
      </Card.Header>

      <Card.Content>
        <UserForm defaultValues={userData?.user} onSubmit={handleSubmit} />
      </Card.Content>
    </Card>
  );
};

export default EditUser;
