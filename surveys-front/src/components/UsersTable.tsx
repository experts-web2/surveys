import React from "react";
import { Table } from "../shared/components";
import { UsersColumns } from "../constants";

export const UsersTable = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(function getUsers() {
    //Todo
  }, []);

  return (
    <Table
      rows={rows}
      columns={UsersColumns}
      onAddNew={console.log}
      onRowClick={console.log}
      onDelete={console.log}
    />
  );
};
