import React from "react";
import { UsersTable, UserFormDialog } from "../../components";
import { getUsers, createUser } from "../../services/user.service";
import { getAll as getSettings } from "../../services/settings.service";
import { User, Setting } from "../../models";

export const Users = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [settings, setSettings] = React.useState<Setting[]>([]);
  const [openDialog, setDialog] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<User | undefined>(
    undefined
  );

  React.useEffect(() => {
    getUsersAndSettings();
  }, []);

  const getUsersAndSettings = async () => {
    try {
      const [_settings, _users] = await Promise.all([
        getSettings(),
        getUsers(),
      ]);
      setUsers(_users);
      setSettings(_settings);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEdit(true);
    setDialog(true);
  };

  const onDelete = async ({ _id }: User) => {
    // try {
    //   await deleteSetting(_id);
    // } catch (error) {
    //   console.log({ error });
    // } finally {
    //   getSettings()
    // }
  };

  const saveUser = async (user: User) => {
    try {
      await createUser(user);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <React.Fragment>
      <UserFormDialog
        open={openDialog}
        isEdit={isEdit}
        settings={settings}
        editData={selectedUser}
        saveUser={saveUser}
        updateUser={console.log}
        closeDialog={() => setDialog(false)}
      />
      <UsersTable
        data={users}
        onAddNew={() => setDialog(true)}
        onRowClick={handleEdit}
        onDelete={onDelete}
      />
    </React.Fragment>
  );
};
