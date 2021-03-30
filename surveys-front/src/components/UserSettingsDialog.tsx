import React from "react";
import { Form, Button } from "react-bootstrap";
import { Setting } from "../models";
import { Dialog } from "../shared/components";

interface IProps {
  settings: Setting[];
  addSetting: (id: string) => void;
  existingSettings: string[];
}

export const UserSettingsDialog = ({
  settings,
  addSetting,
  existingSettings,
}: IProps) => {
  const [openDialog, setDialog] = React.useState<boolean>(false);
  const [selectedSetting, setSelectedSetting] = React.useState<string>(
    "Choose"
  );

  const handleAddSetting = () => {
    addSetting(selectedSetting);
    setSelectedSetting("Choose");
    setDialog(false);
  };

  const handleClose = () => {
    setSelectedSetting("Choose");
    setDialog(false);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setDialog(true)}>Add Settings</Button>
      <Dialog
        title={"Add Settings"}
        handleOk={handleAddSetting}
        handleClose={handleClose}
        open={openDialog}
        isSaveDisabled={selectedSetting === "Choose"}
      >
        <Form>
          <Form.Group controlId="settingControl">
            <Form.Label>Select Setting</Form.Label>
            <Form.Control
              as="select"
              value={selectedSetting}
              onChange={(e) => setSelectedSetting(e.target.value)}
            >
              <option value={"Choose"} disabled>
                Choose
              </option>
              {settings
                .filter((x) => !existingSettings.some((y) => y === x._id))
                .map((setting) => (
                  <option key={setting._id} value={setting._id}>
                    {setting.label}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Dialog>
    </React.Fragment>
  );
};
