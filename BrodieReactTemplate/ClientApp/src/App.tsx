import React from 'react';
import type {} from '@mui/x-data-grid/themeAugmentation'

import { AppProviders } from 'src/AppProviders'
import { AppRoutes } from 'src/AppRoutes'
import './i18n'

function App() {
  

  return (
    <AppProviders >                      
      <AppRoutes />      
    </AppProviders>
  )
}

export default App;
