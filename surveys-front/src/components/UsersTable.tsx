import React from "react";
import { Table } from "../shared/components";
import { UsersColumns } from "../constants";
import { User } from "../models";

interface IProps {
  data: User[];
  onAddNew: () => void;
  onRowClick: (user: User) => void;
  onDelete: (user: User) => void;
}

export const UsersTable = ({
  data,
  onAddNew,
  onRowClick,
  onDelete,
}: IProps) => {
  return (
    <Table
      rows={data}
      columns={UsersColumns}
      onAddNew={onAddNew}
      onRowClick={onRowClick}
      onDelete={onDelete}
    />
  );
};
