import styled from "styled-components";

export const StyledTable = styled.table`
  border: 1px solid black;
  width: 100%;
`;

export const StyledTableRow = styled.tr`
  border: 1px solid black;
`;

export const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.neutral.main};
`;

export const StyledTableCell = styled.td`
  padding: 1rem;
`;

interface StyledTableHeaderCellProps {
  $isSortable?: boolean;
}

export const StyledTableHeaderCell = styled.th<StyledTableHeaderCellProps>`
  padding: 1rem;
  text-align: left;
  cursor: ${({ $isSortable }) => ($isSortable ? "pointer" : "default")};
`;
