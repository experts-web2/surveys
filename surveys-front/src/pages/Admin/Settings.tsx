import React from "react";
import { SettingsTable, SettingsFormDialog } from "../../components";
import {
  createSetting,
  updateSetting,
  deleteSetting,
  getAll,
} from "../../services/settings.service";
import { Setting } from "../../models";

export const Settings = () => {
  const [settings, setSettings] = React.useState<Setting[]>([]);
  const [openDialog, setDialog] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [selectedSetting, setSelectedSetting] = React.useState<
    Setting | undefined
  >(undefined);

  React.useEffect(() => {
    getSettings();
  }, []);

  const getSettings = async () => {
    try {
      const response = await getAll();
      setSettings(response);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleEdit = (setting: Setting) => {
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
    } finally {
      getSettings()
    }
  };

  const updateSettings = async (setting: Setting) => {
    try {
      await updateSetting(setting);
      setDialog(false);
      setEdit(false);
      setSelectedSetting(undefined);
    } catch {
      setDialog(false);
      setEdit(false);
      setSelectedSetting(undefined);
    } finally {
      getSettings()
    }
  };

  const onDelete = async ({ _id }: Setting) => {
    try {
      await deleteSetting(_id);
    } catch (error) {
      console.log({ error });
    } finally {
      getSettings()
    }
  };

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
        data={settings}
        onAddNew={() => setDialog(true)}
        onRowClick={handleEdit}
        onDelete={onDelete}
      />
    </React.Fragment>
  );
};
