import React from "react";
import { Form } from "react-bootstrap";
import { BaseLayout } from "../components";

export const Home = () => {
  const [user, setUser] = React.useState<"null" | "admin" | "user">("null");

  React.useEffect(function getUsers() {
    //Todo
  }, []);

  const handleUserChange = ({
    target,
  }: React.ChangeEvent<{ value: string }>) => {
    console.log("Value", target.value);
    setUser(target.value as "null" | "admin" | "user");
  };

  return (
    <div>
      <Form>
        <Form.Label>Select User</Form.Label>
        <Form.Control as={"select"} value={user} onChange={handleUserChange}>
          <option value={"null"} disabled>
            Choose
          </option>
          <option value={"admin"}>Admin</option>
          <option value={"user"}>User 1</option>
        </Form.Control>
      </Form>
      <BaseLayout role={user} />
    </div>
  );
};
