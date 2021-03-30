import React from "react";
import { Form, ListGroup, Button } from "react-bootstrap";
import { User, Role, Setting } from "../models";
import { UserRoles } from "../constants";
import { UserSettingsDialog } from "./UserSettingsDialog";

interface IProps {
  settings: Setting[];
  user: User;
  setUser: (user: User) => void
}

export const UserForm = ({ settings, user, setUser }: IProps) => {

  const addSetting = (id: string) => {
    setUser({ ...user, settings: [...user.settings, id] });
  };

  return (
    <Form>
      <Form.Group controlId="userName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={user.name}
          onChange={(e: React.ChangeEvent<{ value: string }>) =>
            setUser({ ...user, name: e.target.value })
          }
        />
        <Form.Text className="text-muted">Name for the Setting</Form.Text>
      </Form.Group>

      <Form.Group controlId="userRole">
        <Form.Label>Role</Form.Label>
        <Form.Control
          as="select"
          value={user.role}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
            setUser({ ...user, role: (e.target.value as unknown) as Role })
          }
        >
          <option value={"Choose"}>Choose</option>
          {UserRoles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <UserSettingsDialog
        settings={settings}
        existingSettings={user.settings}
        addSetting={addSetting}
      />
            <ListGroup>
        {user.settings.map((u) => settings.find(x => x._id === u)).map((s) => (
          <React.Fragment key={s?._id}>
            <ListGroup.Item className={"d-flex justify-content-between py-2"}>
              <span>{s!.label}</span>
              <Button
                variant="danger"
                onClick={() =>
                  setUser({...user, settings: user.settings.filter(x => x !== s!._id)})
                }
              >
                Delete
              </Button>
            </ListGroup.Item>
          </React.Fragment>
        ))}
      </ListGroup>
    </Form>
  );
};
