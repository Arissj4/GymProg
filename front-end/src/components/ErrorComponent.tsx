import React from 'react'
import { Alert, Backdrop } from '@mui/material'

type Props = {
  text: string,
  activated: Boolean,
  onClose: () => void,
}

const ErrorComponent = (props: Props) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.activated}
      className='items-start! pt-8'
      onClick={() => props.onClose()}
    >
      <Alert severity="error" onClose={() => props.onClose()}>
        {props.text}
      </Alert>
    </Backdrop>
  )
}

export default ErrorComponent