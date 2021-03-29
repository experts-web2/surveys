import React from "react";
import { SettingsTable, SettingsFormDialog } from "../../components";
import { createSetting, updateSetting, deleteSetting } from "../../services/settings.service";
import { Setting } from "../../models";

export const Settings = () => {
  const [openDialog, setDialog] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [selectedSetting, setSelectedSetting] = React.useState<
    Setting | undefined
  >(undefined);

  const handleRowClick = (setting: Setting) => {
    setSelectedSetting(setting);
    setEdit(true);
    setDialog(true);
  };

  const saveSettings = async (setting: Setting) => {
    try {
      await createSetting(setting);
      setDialog(false);
    } catch {
      setDialog(false);
    }
  };

  const updateSettings = async (setting: Setting) => {
    try {
      await updateSetting(setting);
      setDialog(false);
      setEdit(false)
      setSelectedSetting(undefined)
    } catch {
      setDialog(false);
      setEdit(false)
      setSelectedSetting(undefined)
    }
  };

  const onDelete = async ({ _id }: Setting) => {
    try {
      await deleteSetting(_id)
    } catch {

    }
  }

  return (
    <React.Fragment>
      <SettingsFormDialog
        open={openDialog}
        isEdit={isEdit}
        editData={selectedSetting}
        saveSettings={saveSettings}
        updateSettings={updateSettings}
        closeDialog={() => setDialog(false)}
      />
      <SettingsTable
        onAddNew={() => setDialog(true)}
        onRowClick={handleRowClick}
        onDelete={onDelete}
      />
    </React.Fragment>
  );
};
