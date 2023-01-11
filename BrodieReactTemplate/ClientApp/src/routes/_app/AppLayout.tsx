import { Box, CssBaseline, LinearProgress } from "@mui/material"
import { Outlet } from 'react-router-dom'
import { useAuth } from "react-oidc-context"
import { useTranslation } from 'react-i18next'

import { AppNavBar } from './AppNavBar'

export const AppLayout = () => {
  const { t } = useTranslation()
  const auth = useAuth()

  const renderContent = () => {
    
    switch (auth.activeNavigator) {
      case "signinSilent":
          return <div><LinearProgress /></div>
      case "signoutRedirect":
          return <div><LinearProgress /></div>
    }
  
    if (auth.isLoading) {
      return <div><LinearProgress /></div>;
    }
  
    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    return <Outlet />
  }

  return (
    <>
      <CssBaseline />
            
      <AppNavBar/>
      
      <Box sx={{minHeight: '80vh'}}>
        {renderContent()}       
      </Box>

      <Box
        sx={{
          color: 'white',
          backgroundColor: 'footerBackground.main',
          height: '30rem'
        }}
        p={6}
      >
        {t('project-name', 'Brodie React Template')} - Copyright {new Date().getFullYear()}
      </Box>      
    </>
  )
}