import { typeOf } from 'react-is'
import { TableColumn } from './props'
import { StyledTable } from './styles'
import React, { useMemo } from 'react'

const TableBody = ({ cols, rows, rowsPerPage, page, onRowClicked }: any) => {
  const handleRowClicked = (col: TableColumn, item: any) => {
    if (col.button) {
      return
    }
    if (onRowClicked) {
      onRowClicked(item)
    }
  }

  const getColumnValue = (column: TableColumn, item: any) => {
    if (typeof column.selector === 'function') {
      return column.selector(item)
    }

    return item[column.selector]
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {cols.map((column: TableColumn, cIndex: number) => (
            <th key={cIndex}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item: any, rIndex: number) => (
            <tr key={rIndex}>
              {cols.map((column: TableColumn, cIndex: number) => (
                <td
                  key={cIndex}
                  style={column?.style || {}}
                  onClick={() => handleRowClicked(column, item)}
                >
                  {getColumnValue(column, item)}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </StyledTable>
  )
}

export default TableBody
