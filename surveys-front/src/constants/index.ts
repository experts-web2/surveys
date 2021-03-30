import { IColumn, ESettingControls, Role } from "../models";

export const API_BASE_URL = "http://localhost:3001";

export const SettingsColumns: IColumn[] = [
  { label: "Name", value: "label" },
  { label: "Control Type", value: "control" },
];

export const UsersColumns: IColumn[] = [
  { label: "Name", value: "name" },
  { label: "Role", value: "role" },
  { label: "Settings", value: "settings" },
];

export const SettingControls: { label: string; value: ESettingControls }[] = [
  { label: "Text Field", value: ESettingControls.TEXT_INPUT },
  { label: "Number Field", value: ESettingControls.NUMERIC_INPUT },
  { label: "Date Picker", value: ESettingControls.CALENDAR },
  { label: "Radio", value: ESettingControls.RADIO },
  { label: "Checkbox", value: ESettingControls.CHECKBOX },
  { label: "Slider", value: ESettingControls.SLIDER },
  { label: "Dropdown", value: ESettingControls.DROPDOWN },
];

export const UserRoles: { label: string; value: Role }[] = [
  { label: "Admin", value: Role.ADMIN },
  { label: "User", value: Role.USER },
];
