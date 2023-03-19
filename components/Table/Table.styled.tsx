import styled from "styled-components";

export const StyledTableContainer = styled.div`
  max-height: 60vh;
  width: 100%;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    border: none;
    width: 100%;
    max-height: 80vh;
  }
`;

export const StyledTable = styled.table`
  border: 1px solid black;
  width: 100%;
  table-layout: auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    border: none;
    table-layout: fixed;
    max-width: 30rem;
  }
`;

export const StyledTableRow = styled.tr`
  border: 1px solid black;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    border-bottom: 1px solid black;
    display: block;
    margin-bottom: 0.625em;
  }
`;

export const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.neutral.light};

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const StyledTableCell = styled.td`
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.large}) {
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8em;
    text-align: right;

    & > span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:before {
      margin-right: 0.5rem;
      content: attr(data-label);
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

interface StyledTableHeaderCellProps {
  $isSortable?: boolean;
}

export const StyledTableHeaderCell = styled.th<StyledTableHeaderCellProps>`
  padding: 1rem;
  text-align: left;
  cursor: ${({ $isSortable }) => ($isSortable ? "pointer" : "default")};
`;
