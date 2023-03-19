import { TableState } from "features/userTable/userTableSlice";
import { TColumn, TableProps } from "./Table.types";

type ValidatePropsProps = Omit<TableProps<any>, "data">;

export function validateProps({
  columns,
  toggleSort,
  sortOrder,
}: ValidatePropsProps) {
  const columnIds = columns.map((column) => column.id);
  const columnIdsSet = new Set(columnIds);
  const isSortable = columns.some((column) => column.isSortable);

  if (columnIds.length !== columnIdsSet.size) {
    throw new Error("Column ids must be unique");
  }

  if (isSortable && !toggleSort) {
    throw new Error("toggleSort is required when columns are isSortable");
  }

  if (isSortable && !sortOrder) {
    throw new Error("sortOrder is required when columns are isSortable");
  }
}

export function getColumnAccessor<T>(row: T, column: TColumn<T>) {
  if (!column.accessor) {
    return row[column.id];
  }

  return column.accessor(row);
}

export function sortData<TData>(data: TData[], sortOrder: TableState<TData>) {
  return [...data].sort((a, b) => {
    const { sortField } = sortOrder;
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue > bValue) {
      return sortOrder.direction === "asc" ? 1 : -1;
    }

    if (aValue < bValue) {
      return sortOrder.direction === "asc" ? -1 : 1;
    }

    return 0;
  });
}
