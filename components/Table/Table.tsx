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
            {columns.map((column) => (
              <StyledTableHeaderCell
                key={column.id}
                $isSortable={column.sortable}
                onClick={() => toggleSort && toggleSort(column)}
              >
                {column.header}
              </StyledTableHeaderCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>

        <tbody>
          {sortedData.map((row) => (
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
    </StyledTableContainer>
  );
}
