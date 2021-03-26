import React from "react";
import { Table as BootstrapTable, Button } from "react-bootstrap";
import { IColumn } from "../../models";

interface IProps<T> {
  rows: T[];
  columns: IColumn[];
  onAddNew: () => void;
  onRowClick: (row?: T) => void
}

export function Table<T>({ rows, columns, onAddNew, onRowClick }: IProps<T>) {
  return (
    <React.Fragment>
      <Button onClick={onAddNew}>Add New Setting</Button>
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => onRowClick(row)}
            >
              {columns.map((col, index) => (
                <td key={index}>{(row as any)[col.value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    </React.Fragment>
  );
}
