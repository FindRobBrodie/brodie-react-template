import {  ThemeProvider } from '@mui/material/styles'

import { theme, darkTheme } from './theme'
import { useAppState } from 'src/hooks/useAppState'

type AppThemeProviderProps = {
  children?: React.ReactNode | undefined
}

export const AppThemeProvider = ({
  children
}: AppThemeProviderProps) => {
  const { themeColorMode } = useAppState()

  return (
    <ThemeProvider theme={themeColorMode === 'dark' ? darkTheme : theme}>
      {children}
    </ThemeProvider>    
  )
}