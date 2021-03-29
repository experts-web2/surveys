export interface IColumn {
  label: string;
  value: string;
}

export class Setting {
  _id: string = ""
  label: string = "";
  control: ESettingControls | "Choose" = "Choose";
  options: string[] = [];
}

export enum ESettingControls {
  TEXT_INPUT = "input",
  NUMERIC_INPUT = "numeric_input",
  CALENDAR = "calendar",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  SLIDER = "slider",
  DROPDOWN = "dropdown"
}
