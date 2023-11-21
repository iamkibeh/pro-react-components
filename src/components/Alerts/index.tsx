import React, { createContext, useContext, useState } from 'react'
import ConfirmModal from './confirm'
import { ConfirmProps, SnackProps, SupportedColors } from './props'
import SnackAlert from './snack'

const initConfirmState: ConfirmProps = {
  open: false,
  title: '',
  message: '',
  showCancelButton: true,
  confirmButtonColor: 'error',
  cancelButtonColor: 'success',
  confirmButtonText: 'Yes, Delete',
  cancelButtonText: 'No, Cancel',
  onConfirm: () => {},
  onCancel: () => {},
}

const initSnackState: SnackProps = {
  type: 'success',
  open: false,
  message: '',
  duration: 3000,
  origin: { vertical: 'top', horizontal: 'right' },
  variant: 'filled',
  children: null,
}

interface AlertProps {
  confirmProps?: ConfirmProps
  snackProps?: SnackProps
  children: React.ReactNode
}

const AlertContext = createContext({
  confirm: (_options: ConfirmProps) => {},
  alertSuccess: (_message: string) => {},
  alertError: (_message: string) => {},
  alertWarning: (_message: string) => {},
})

export const AlertProvider = (props: AlertProps) => {
  const [confirmState, setConfirmState] = useState(
    props.confirmProps || initConfirmState
  )
  const [snackState, setSnackState] = useState(
    props.snackProps || initSnackState
  )

  const handleCloseConfirm = () => {
    setConfirmState({ ...confirmState, open: false })
  }

  const handleConfirm = () => {
    if (confirmState.onConfirm) confirmState.onConfirm()
    handleCloseConfirm()
  }

  const handleCancel = () => {
    if (confirmState.onCancel) confirmState.onCancel()
    handleCloseConfirm()
  }

  const confirmButtons = [
    {
      text: confirmState.confirmButtonText,
      color: confirmState.confirmButtonColor,
      onClick: handleConfirm,
      hidden: false,
    },
    {
      text: confirmState.cancelButtonText,
      color: confirmState.cancelButtonColor,
      onClick: handleCancel,
      hidden: !confirmState.showCancelButton,
    },
  ]

  const confirm = (options: ConfirmProps) => {
    setConfirmState({ ...confirmState, ...options, open: true })
  }

  const createSnack = (message: string, type: SupportedColors) => {
    setSnackState({
      ...snackState,
      message,
      type,
      open: true,
    })
  }

  const closeSnack = () => setSnackState({ ...snackState, open: false })

  const alertSuccess = (message: string) => {
    createSnack(message, 'success')
  }

  const alertError = (message: string) => {
    createSnack(message, 'error')
  }

  const alertWarning = (message: string) => {
    createSnack(message, 'warning')
  }

  const providerProps = {
    confirm,
    alertSuccess,
    alertError,
    alertWarning,
  }

  return (
    <AlertContext.Provider value={providerProps}>
      {props.children}
      <ConfirmModal
        data={confirmState}
        handleClose={handleCloseConfirm}
        buttons={confirmButtons}
      />
      <SnackAlert data={snackState} closeSnack={closeSnack} />
    </AlertContext.Provider>
  )
}

export const useAlerts = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlerts must be used within AlertProvider')
  }
  return context
}
