import { Card } from "components/Card";
import { UserForm } from "components/UserForm";
import { NextPage } from "next";

const AddUser: NextPage = () => {
  return (
    <Card maxWidth="300px">
      <Card.Header>
        <h1>Add User</h1>
      </Card.Header>

      <Card.Content>
        <UserForm />
      </Card.Content>
    </Card>
  );
};

export default AddUser;
