import { ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

export type TableColumn = {
  name: string
  selector: string | ((item: any) => ReactNode)
  button?: boolean
  style?: any
}

export type TableProps<T> = {
  title?: string
  loading?: boolean
  error?: Error
  columns: TableColumn[]
  data: any[]
  emptyMessage?: string
  showSearch?: boolean
  onSearch?: (value: string) => void
  buttons?: ButtonProps[]
  onRowClicked?: (row: T) => void
  rowsPerPageOptions?: number[]
  sx?: any
}
