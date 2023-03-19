import { useEffect, useMemo } from "react";
import { TDataWithId, TableProps } from "./Table.types";
import {
  StyledTable,
  StyledTableCell,
  StyledTableContainer,
  StyledTableHead,
  StyledTableHeaderCell,
  StyledTableRow,
} from "./Table.styled";

import { getColumnAccessor, sortData, validateProps } from "./Table.utils";

// in production I would use Tanstack Table instead
export function Table<T extends TDataWithId>(props: TableProps<T>) {
  const { data = [], columns, toggleSort, sortOrder } = props;

  useEffect(() => {
    validateProps({ columns, toggleSort, sortOrder });
  }, [columns, sortOrder, toggleSort]);

  const sortedData = useMemo(() => {
    if (!sortOrder) {
      return data;
    }

    return sortData<T>(data, sortOrder);
  }, [data, sortOrder]);

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {columns.map((column) => {
              const { id, header, isSortable } = column;

              return (
                <StyledTableHeaderCell
                  key={id}
                  $isSortable={isSortable}
                  onClick={() => isSortable && toggleSort(column)}
                >
                  <span>{header}</span>
                </StyledTableHeaderCell>
              );
            })}
          </StyledTableRow>
        </StyledTableHead>

        <tbody>
          {sortedData.map((row) => (
            <StyledTableRow key={row.id}>
              {columns.map((column) => (
                <StyledTableCell
                  data-label={column.header}
                  key={`${row.id}_${column.id}`}
                >
                  <span>{getColumnAccessor(row, column)}</span>
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
}
