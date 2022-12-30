import React, { HTMLProps } from 'react'
import { Box } from '@mui/material'
import { LayoutHeader } from '@presentation/pages/layout/layout-header'
import { LayoutBody } from '@presentation/pages/layout/layout-body'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      height="100vh"
      display="flex"
      flexDirection="column"
    >
      <LayoutHeader />
      <LayoutBody>
        <Outlet />
      </LayoutBody>
    </Box>
  )
}

export { Layout }
