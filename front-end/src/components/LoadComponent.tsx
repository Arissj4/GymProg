import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material';

type Props = {}

const LoadComponent = (props: Props) => {
  return (
    <Backdrop
      open={true}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress
        color="inherit"
        aria-label = "loading"
        enableTrackSlot
      />
    </Backdrop>
  )
}

export default LoadComponent