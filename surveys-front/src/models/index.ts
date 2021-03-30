export interface IColumn {
  label: string;
  value: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
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

export class User {
  _id: string = ""
  name: string = "";
  role: Role | "Choose" = "Choose"
  settings: string[] = []
}
