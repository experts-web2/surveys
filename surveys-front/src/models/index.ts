export interface IColumn {
  label: string;
  value: string;
}

export class Setting {
  label: string = "";
  type: string = "";
  control: string = "Choose";
  options: string[] = [];
  value: string = "";
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
