interface TColumn<T> {
  id: string;
  header: React.ReactNode;
  accessor?: (row: T) => React.ReactNode;
}

interface TDataWithId {
  id: string;
}

export type { TColumn, TDataWithId };
