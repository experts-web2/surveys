import React from "react";
import { Table } from "../shared/components";
import { SettingsColumns } from "../constants";
import { getAll } from "../services/settings.service";
import { Setting } from "../models";

interface IProps {
  onAddNew: () => void;
  onRowClick: (setting: Setting) => void;
  onDelete: (setting: Setting) => void
}

export const SettingsTable = ({ onAddNew, onRowClick, onDelete }: IProps) => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    getSettings();
  }, []);

  const getSettings = async () => {
    try {
      const settings = await getAll();
      setRows(settings);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Table
      rows={rows}
      columns={SettingsColumns}
      onAddNew={onAddNew}
      onRowClick={onRowClick}
      onDelete={onDelete}
    />
  );
};
