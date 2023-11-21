import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { ConfirmModalProps } from './props'
import Modal from '../Modal'
import { MyButton } from '../Button'

function ConfirmModal(props: ConfirmModalProps) {
  const {
    data: { open, title, message },
    buttons,
    handleClose,
  } = props
  return (
    <Modal open={open} onClose={handleClose} title={title} showCloseIcon={false}>
      <Box sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: '1.2rem' }}>{message}</Typography>
        <Stack direction='row' spacing={2} sx={{ mt: 5 }}>
          {buttons.map((button, index) => (
            <MyButton key={index} onClick={button.onClick} color={button.color}>
              {button.text}
            </MyButton>
          ))}
        </Stack>
      </Box>
    </Modal>
  )
}

export default ConfirmModal
