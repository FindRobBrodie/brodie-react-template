import React from 'react'
import { IconButton, Link, Tooltip } from "@mui/material"
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { useAppState } from 'src/hooks/useAppState'

export const DarkMode = () => {
  const { themeColorMode, toggleThemeColorMode } = useAppState()

  return (
    <Tooltip title={`Enable ${themeColorMode === 'dark' ? 'light' : 'dark'} mode`}>
        <IconButton sx={{ ml: 1 }} onClick={toggleThemeColorMode} color="inherit">
          {themeColorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>
  )
}