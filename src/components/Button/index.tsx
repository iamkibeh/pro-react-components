import React from 'react'
import { Button, ButtonProps } from "@mui/material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";

const MyButton = ({children, ...rest}: ButtonProps) => {
    rest.sx = { textTransform: "none", ...rest.sx };
    rest = { disableElevation: true, ...rest };
    return (
        <Button variant="contained" color="primary" {...rest}>
            {children}
        </Button>
    )
}

const LButton = ({ children, ...rest }: LoadingButtonProps) => {
  rest.sx = { textTransform: 'none', ...rest.sx }
  rest = { disableElevation: true, ...rest }
  return (
    <LoadingButton variant='contained' color='primary' {...rest}>
      {children}
    </LoadingButton>
  )
}

export { MyButton, LButton };