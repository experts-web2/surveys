import React from "react";
import { Dialog } from "../shared/components";
import { User, Setting } from "../models";
import { UserForm } from "./UserForm";

interface IProps {
  settings: Setting[];
  open: boolean;
  isEdit: boolean;
  editData: User | undefined;
  saveUser: (user: User) => void;
  updateUser: (user: User) => void;
  closeDialog: () => void;
}

export const UserFormDialog = ({
  open,
  isEdit,
  editData,
  saveUser,
  updateUser,
  closeDialog,
  settings,
}: IProps) => {
  const [user, setUser] = React.useState(() => new User());

  const isSaveDisabled = !user.name || user.settings.length < 1

  const addNewUser = () => {
    saveUser(user)
  };
  return (
    <Dialog
      title={isEdit ? "Edit User" : "Create User"}
      open={open}
      handleOk={addNewUser}
      handleClose={closeDialog}
      isSaveDisabled={isSaveDisabled}
    >
      <UserForm settings={settings} user={user} setUser={setUser} />
    </Dialog>
  );
};
