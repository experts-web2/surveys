import React from "react";
import { Button, Form } from "react-bootstrap";
import { Dialog } from "../shared/components";
import { ESettingControls } from "../models";

interface IProps {
  control: ESettingControls | "Choose";
  addNewOption: (option: string) => void;
}

export const SettingsControlOptions = ({
  control,
  addNewOption,
}: IProps) => {
  const [openDialog, setDialog] = React.useState<boolean>(false);
  const [option, setOption] = React.useState<string>("");

  const handleNewOption = () => {
    addNewOption(option);
    setDialog(false)
    setOption("");
  };

  switch (control) {
    case ESettingControls.RADIO:
    case ESettingControls.DROPDOWN:
      return (
        <React.Fragment>
          <Button onClick={() => setDialog(true)}>Add Options</Button>
          <Dialog
            open={openDialog}
            title={"Create Option"}
            handleClose={() => setDialog(false)}
            handleOk={handleNewOption}
            isSaveDisabled={!option.length}
          >
            <Form>
              <Form.Group>
                <Form.Control
                  value={option}
                  onChange={(event: React.ChangeEvent<{ value: string }>) =>
                    setOption(event.target.value)
                  }
                  type="text"
                  placeholder="Option"
                />
              </Form.Group>
            </Form>
          </Dialog>
        </React.Fragment>
      );
    default:
      return null;
  }
};
