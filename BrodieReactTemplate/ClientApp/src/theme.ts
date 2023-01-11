import { createTheme } from '@mui/material/styles'
import { green, grey, lightBlue } from '@mui/material/colors'

/*
Use this file to config your app's theme.

Use the link below for details:
https://mui.com/material-ui/customization/theming/

This is helpful for picking colors that fit the MaterialUI pallet:
https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes

This tool is great for tweaking your theme and seeing what it would look like in a sample app:
https://bareynol.github.io/mui-theme-creator/

*/
declare module '@mui/material/styles' {
  interface PaletteOptions {
    baseBackground: PaletteOptions['primary']
    mainBackground: PaletteOptions['primary']    
    footerBackground: PaletteOptions['primary']
  }
}

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: green['A400'],
    },
    info: {
      main: '#0f3',
    },
    baseBackground: {
      main: '#f5f5f5',
    },
    mainBackground: {
      main: '#ffffff',
    },
    footerBackground: {
      main: lightBlue[900]
    },
  },  
})

export const darkTheme = createTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: lightBlue[500],
    },
    info: {
      main: '#0f3',
    },
    baseBackground: {
      main: 'rgba(255, 255, 255, 0.12)',
    },
    mainBackground: {
      main: 'black',
    },
    footerBackground: {
      main: grey[900]
    },    
  },
  components: {
    MuiTabs: {
      styleOverrides: {        
        indicator: {              
          backgroundColor: grey[50],          
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        selected: {
          color: grey[900]
        }
      }
    }
  },
})
