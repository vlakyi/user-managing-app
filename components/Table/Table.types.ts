import { TableState } from "features/userTable/userTableSlice";

interface TColumn<T> {
  id: string;
  header: React.ReactNode;
  accessor?: (row: T) => React.ReactNode;
  isSortable?: boolean;
}

interface TDataWithId {
  id: string;
}

interface TableProps<TData> {
  data?: TData[];
  columns: TColumn<TData>[];
  toggleSort?: (column: TColumn<TData>) => void;
  sortOrder?: TableState<TData>;
}

export type { TColumn, TDataWithId, TableProps };
