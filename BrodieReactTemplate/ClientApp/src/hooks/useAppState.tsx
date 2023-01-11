import React from 'react'

export type ThemeColorMode = 'light' | 'dark'

interface AppState {
  themeColorMode: ThemeColorMode,
  seasonId: number | null,
  language: string
}

interface AppStateContext extends AppState {
  toggleThemeColorMode: () => void,
  notifySeasonChanged: (id: number) => void,
  notifyLanguageChanged: (language: string) => void,
}


const AppStateContext = React.createContext<AppStateContext>(null)

function appStateReducer(state: AppState, action) {
  switch (action.type) {
    case 'toggle_theme_color_mode': {
      return {...state, themeColorMode: state.themeColorMode === 'light' ? 'dark' : 'light' }
    }
    case 'season_changed': {
      return {...state, seasonId: action.payload}
    }
    case 'language_changed': {
      return {...state, language: action.payload}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function AppStateProvider({children}) {
  const [state, dispatch] = React.useReducer(appStateReducer, {
    themeColorMode: 'light',
    seasonId: null,
    language: 'en'
  } as AppState)  
  
  const toggleThemeColorMode = () => {    
    dispatch({type: 'toggle_theme_color_mode'})
  }

  const notifySeasonChanged = (id: number) => {    
    dispatch({type: 'season_changed', payload: id})
  }

  const notifyLanguageChanged = (language) => {    
    dispatch({type: 'language_changed', payload: language})
  }

  const value = {
    themeColorMode: state.themeColorMode, 
    seasonId: state.seasonId,
    toggleThemeColorMode,
    notifySeasonChanged,
    notifyLanguageChanged
  } as AppStateContext
 
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}

export const useAppState = () => {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}