import React from 'react'
import { useAuth } from 'react-oidc-context'

type RequireAuthProps = {  
  children?: React.ReactElement | undefined
}

export const RequireAuth = ({  
  children
}: RequireAuthProps): JSX.Element => {
  const auth = useAuth()    
      
  if (!Boolean(auth?.isAuthenticated)) {
    auth.signinRedirect()
    return null
    
  }
  else {
    return children
  }
}