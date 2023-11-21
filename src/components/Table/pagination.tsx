import React, { useMemo } from 'react'
import { Box, IconButton, TablePagination as Pagination } from '@mui/material'
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from '@mui/icons-material'

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        <LastPage />
      </IconButton>
    </Box>
  )
}

const TablePagination = ({
  rows,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  rowsPerPageOptions,
}: any) => {
  const count: number = useMemo(() => rows.length, [rows])

  const onRowsPerPageChange = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  const onPageChange = (_e: any, page: number) => {
    setPage(page)
  }

  if (count < rowsPerPage) {
    return null
  }

  return (
    <Pagination
      sx={{ mt: 3 }}
      component='div'
      page={page}
      count={count}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      onRowsPerPageChange={onRowsPerPageChange}
      onPageChange={onPageChange}
      ActionsComponent={TablePaginationActions}
    />
  )
}

export default TablePagination
