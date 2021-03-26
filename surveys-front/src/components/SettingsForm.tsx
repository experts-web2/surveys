import React from "react";
import { Form } from "react-bootstrap";
import { Dialog } from "../shared/components";
import { Setting } from "../models";
import { SettingControls } from "../constants";

interface IProps {
  open: boolean;
  isEdit: boolean;
  saveSettings: (settings: Setting) => void;
  updateSettings: (settings: Setting) => void;
}

export const SettingsForm = ({ open, isEdit, saveSettings }: IProps) => {
  const [settings, setSettings] = React.useState<Setting>(() => new Setting());
  const isDisabled = !settings.label || settings.control === "Choose";

  const handleOk = () => {
    saveSettings(settings)
  };

  const handleClose = () => {};

  return (
    <Dialog
      open={open}
      title={isEdit ? "Edit Settings" : "Create Settings"}
      handleOk={handleOk}
      handleClose={handleClose}
      isSaveDisabled={isDisabled}
    >
      <Form>
        <Form.Group controlId="settingName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={settings.label}
            onChange={(e) =>
              setSettings({ ...settings, label: e.target.value as string })
            }
          />
          <Form.Text className="text-muted">Name for the Setting</Form.Text>
        </Form.Group>
        <Form.Group controlId="settingControl">
          <Form.Label>Select Control</Form.Label>
          <Form.Control
            as="select"
            value={settings.control}
            onChange={(e) =>
              setSettings({ ...settings, control: e.target.value })
            }
          >
              <option value={"Choose"}>Choose</option>
            {SettingControls.map((control) => (
              <option key={control.value} value={control.value}>
                {control.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Dialog>
  );
};
