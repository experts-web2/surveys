import React from "react";
import { SettingsTable, SettingsForm } from "../../components";
import { create } from "../../services/settings.service";
import { Setting } from "../../models";

export const Settings = () => {
  const [openDialog, setDialog] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);

  const saveSettings = async (setting: Setting) => {
    try {
      await create(setting);
      setDialog(false);
    } catch {
      setDialog(false);
    }
  };

  return (
    <React.Fragment>
      <SettingsForm
        open={openDialog}
        isEdit={isEdit}
        saveSettings={saveSettings}
        updateSettings={console.log}
      />
      <SettingsTable
        onAddNew={() => setDialog(true)}
        onRowClick={(settings) => console.log("Clicked")}
      />
    </React.Fragment>
  );
};
