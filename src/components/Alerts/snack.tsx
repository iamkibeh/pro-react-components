import { Alert, Slide, Snackbar } from '@mui/material'
import React from 'react'
import { SnackAlertProps } from './props'

const TransitionUp = (props: any) => {
  return <Slide {...props} direction='left' />
}

function SnackAlert({ data, closeSnack }: SnackAlertProps) {
  const { type, open, message, duration, origin, variant = 'filled' } = data
  return (
    <Snackbar
      open={open}
      anchorOrigin={origin}
      autoHideDuration={duration}
      onClose={() => closeSnack()}
      TransitionComponent={TransitionUp}
      sx={{ top: '65px' }}
    >
      <Alert severity={type} sx={{ width: '100%' }} variant={variant}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackAlert
