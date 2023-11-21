import {
  Box,
  CircularProgress,
  CircularProgressProps,
  LinearProgress,
  LinearProgressProps,
} from '@mui/material'

import React from 'react'

export function CircularLoader(props: CircularProgressProps) {
  return (
    <Box
      sx={{ width: '100%', py: 3, display: 'flex', justifyContent: 'center' }}
    >
      <CircularProgress {...props} />
    </Box>
  )
}

export function BarLoader(props: LinearProgressProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant='indeterminate' {...props} />
    </Box>
  )
}
