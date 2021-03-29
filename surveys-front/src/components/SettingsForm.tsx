import React from "react";
import { Form, ListGroup, Button } from "react-bootstrap";
import { SettingsControlOptions } from "./SettingsControlOptions";
import { SettingControls } from "../constants";
import { Setting, ESettingControls } from "../models";

interface IProps {
  settings: Setting;
  addNewOption: (option: string) => void;
  setSettings: (setting: Setting) => void;
}

export const SettingsForm = ({
  settings,
  addNewOption,
  setSettings,
}: IProps) => {
  return (
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
            setSettings({
              ...settings,
              control: (e.target.value as unknown) as ESettingControls,
            })
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
      <SettingsControlOptions
        control={settings.control}
        addNewOption={addNewOption}
      />
      <ListGroup>
        {settings.options?.map((option) => (
          <React.Fragment>
            <ListGroup.Item className={"d-flex justify-content-between py-2"}>
              <span>{option}</span>
              <Button
                variant="danger"
                onClick={() =>
                  setSettings({
                    ...settings,
                    options: settings.options.filter((x) => x !== option),
                  })
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
