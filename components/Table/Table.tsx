import { useEffect } from "react";
import { TColumn, TDataWithId } from "./Table.types";
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableHeaderCell,
  StyledTableRow,
} from "./Table.styled";

interface TableProps<TData> {
  data?: TData[];
  columns: TColumn<TData>[];
}

// in production I would use Tanstack Table instead
export function Table<T extends TDataWithId>({
  data = [],
  columns,
}: TableProps<T>) {
  useEffect(() => {
    validateColumns(columns);
  }, [columns]);

  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          {columns.map((column) => (
            <StyledTableHeaderCell key={column.id}>
              {column.header}
            </StyledTableHeaderCell>
          ))}
        </StyledTableRow>
      </StyledTableHead>

      <tbody>
        {data.map((row) => (
          <StyledTableRow key={row.id}>
            {columns.map((column) => (
              <StyledTableCell key={`${row.id}_${column.id}`}>
                {getColumnAccessor(row, column)}
              </StyledTableCell>
            ))}
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

function validateColumns(columns: TColumn<any>[]) {
  const columnIds = columns.map((column) => column.id);
  const columnIdsSet = new Set(columnIds);

  if (columnIds.length !== columnIdsSet.size) {
    throw new Error("Column ids must be unique");
  }
}

function getColumnAccessor<T>(row: T, column: TColumn<T>) {
  if (!column.accessor) {
    return row[column.id];
  }

  return column.accessor(row);
}
