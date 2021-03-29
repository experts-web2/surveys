import React from "react";
import { Dialog } from "../shared/components";
import { SettingsForm } from "./SettingsForm";
import { Setting, ESettingControls } from "../models";

interface IProps {
  open: boolean;
  isEdit: boolean;
  editData: Setting | undefined
  saveSettings: (settings: Setting) => void;
  updateSettings: (settings: Setting) => void;
  closeDialog: () => void
}

export const SettingsFormDialog = ({ open, isEdit, saveSettings, closeDialog, editData, updateSettings }: IProps) => {
  const [settings, setSettings] = React.useState<Setting>(() => new Setting());

  React.useEffect(() => {
    console.log({editData})
    if(isEdit) setSettings(editData as Setting)
  }, [isEdit, editData])

  /**
   *
   * @returns boolean
   * Validates if options array is filled or not
   */
  const isOptionsPopulated = (): boolean => {
    if (
      (settings.control === ESettingControls.DROPDOWN ||
        settings.control === ESettingControls.RADIO) &&
      settings.options.length < 1
    )
      return false;
    else return true;
  };

  /**
   * Governs the disabling of save button
   */
  const isSaveDisabled =
    !settings.label || settings.control === "Choose" || !isOptionsPopulated();

  const handleOk = () => {
    if(isEdit) updateSettings(settings)
    else saveSettings(settings);
    setSettings(new Setting())
  };

  const addNewOption = (option: string) => {
    setSettings({ ...settings, options: [...settings.options, option] });
  };

  const handleClose = () => {
    closeDialog()
    setSettings(new Setting())
  };

  return (
    <Dialog
      open={open}
      title={isEdit ? "Edit Settings" : "Create Settings"}
      handleOk={handleOk}
      handleClose={handleClose}
      isSaveDisabled={isSaveDisabled}
    >
      <SettingsForm
        settings={settings}
        addNewOption={addNewOption}
        setSettings={setSettings}
      />
    </Dialog>
  );
};
