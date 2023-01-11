import { AppStateProvider } from 'src/hooks/useAppState'
import { AuthProvider, AuthProviderProps } from 'react-oidc-context'
import { AppThemeProvider } from 'src/AppThemeProvider'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import { useAuth } from 'react-oidc-context'
import { User } from 'oidc-client-ts'

/////////////////////////////////////////////////////////////////////////////////////////////
// This file stores all the context providers.
// If a provider needs extra code for configuration, 
// they will be defined in their own wrapper component at bottom of file.
// This will keep the main component clean and easy to understand the order of providers.
// This wrapper pattern also keeps the configuration with that specific provider.
/////////////////////////////////////////////////////////////////////////////////////////////

type AppProvidersProps = {
  children?: React.ReactNode | undefined
}

export const AppProviders = ({
  children
}: AppProvidersProps) => {
  return (
    <AuthProviderWrapper>
      <ApolloProviderWrapper>
        <AppStateProvider>          
          <AppThemeProvider>
            {children}
          </AppThemeProvider>          
        </AppStateProvider>
      </ApolloProviderWrapper>
    </AuthProviderWrapper>
  )
}


type AuthProviderWrapperProps = {
  children?: React.ReactNode | undefined
}

const AuthProviderWrapper = ({children}: AuthProviderWrapperProps) => {

  const oidcConfig: AuthProviderProps = {
    authority: process.env.REACT_APP_AUTH_AUTHORITY,
    client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_AUTH_REDIRECT_URI,
    post_logout_redirect_uri: process.env.REACT_APP_AUTH_POST_LOGOUT_REDIRECT_URI,
    response_type: process.env.REACT_APP_AUTH_RESPONSE_TYPE,
    scope: process.env.REACT_APP_AUTH_SCOPE,
  }

  const handleSigninCallback = (_user: User | void): void => {
    
    //todo: refactor with react router navigate
    //     and fetch required global state (season info) before navigating
    
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    )
  }
  
  return (
    <AuthProvider {...oidcConfig} onSigninCallback={handleSigninCallback}>
      {children}
    </AuthProvider>
  )
}


type ApolloProviderWrapperProps = {
  children?: React.ReactNode | undefined
}

const ApolloProviderWrapper = ({children}: ApolloProviderWrapperProps) => {
  const auth = useAuth()

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL + 'graphql/',
  })
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = auth.user?.access_token
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  })
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
   
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}