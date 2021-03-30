import React from "react";
import { Table as BootstrapTable, Button } from "react-bootstrap";
import { IColumn } from "../../models";

interface IProps<T> {
  rows: T[];
  columns: IColumn[];
  onAddNew: () => void;
  onRowClick: (row: T) => void;
  onDelete: (row: T) => void;
}

export const Table = <T extends unknown>({
  rows,
  columns,
  onAddNew,
  onRowClick,
  onDelete,
}: IProps<T>) => {
  return (
    <React.Fragment>
      <Button onClick={onAddNew}>Add New</Button>
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i}>{col.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ cursor: "pointer" }}>
              {columns.map((col, index) => (
                <td key={index}>{(row as any)[col.value]}</td>
              ))}
              <td>
                <Button variant="dark" onClick={() => onRowClick(row)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(row)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    </React.Fragment>
  );
};
