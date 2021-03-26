import React from "react";
import { ESettingControls } from "../models";

interface IProps {
  control: ESettingControls;
}

export const SettingsControls = ({ control }: IProps) => {
  switch (control) {
    case ESettingControls.DROPDOWN:
      return;
  }
};
