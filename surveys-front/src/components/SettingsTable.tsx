import React from "react";
import { Table } from "../shared/components";
import { SettingsColumns } from "../constants";
import { Setting } from "../models";

interface IProps {
  data: Setting[]
  onAddNew: () => void;
  onRowClick: (setting: Setting) => void;
  onDelete: (setting: Setting) => void
}

export const SettingsTable = ({ data, onAddNew, onRowClick, onDelete }: IProps) => {
  return (
    <Table
      rows={data}
      columns={SettingsColumns}
      onAddNew={onAddNew}
      onRowClick={onRowClick}
      onDelete={onDelete}
    />
  );
};
