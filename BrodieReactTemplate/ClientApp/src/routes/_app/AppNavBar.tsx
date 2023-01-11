import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Link as RouterLink, useLocation, useNavigate  } from 'react-router-dom'
import { useAuth } from "react-oidc-context"
import { useTranslation } from 'react-i18next'

import { DarkMode } from 'src/components/DarkMode'
import { Button, Divider, styled, Tab, Tabs } from '@mui/material';
import logo from 'src/assets/images/logo192.png'
import { AccountCircle } from '@mui/icons-material'
import { LanguagePicker } from 'src/components/LanguagePicker'

export const AppNavBar = () => {
  const auth = useAuth()  
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
   
  const pages = [
      {title: t('classes-menu-item','Classes'), slug: 'school/my-classes', appBarSx: {display: { xs: 'none', sm: 'block' }}}, 
      {title: t('grades-menu-item','Grades'), slug: 'school/my-grades', appBarSx: {display: { xs: 'none', md: 'block' }}}, 
      {title: t('teachers-menu-item','Teachers'), slug: 'school/my-teachers', appBarSx: {display: { xs: 'none', md: 'block' }}},       
    ]
      
  let activeTabIndex = pages.findIndex(page => '/' + page.slug === location.pathname)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  const handleLogInClick = ()=>{   
    alert('Please confirm an OAuth provider then remove this alert!')
    return // TODO: setup OAuth2.0 provider, then remove these lines!

    auth.signinRedirect()

    //close menu
    setAnchorElUser(null)
  }

  const handleLogoutClick = () => {    
    auth.signoutRedirect()
            

    //close menu
    setAnchorElUser(null)
  }

  const handleAccountSettingsClick = () => {
    navigate('/account/settings')

    //close menu
    setAnchorElUser(null)
  }

  const handleTabChange = (event: React.SyntheticEvent, tabIndex: number) => {

  }

  return (
    <>

      <AppBar position="static" color='transparent' sx={{marginTop: '1rem'}}>
        

        <Container maxWidth='xl'>
          <Toolbar disableGutters>          
            
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.title} 
                    onClick={handleCloseNavMenu} 
                    component={RouterLink}
                    to={page.slug} 
                  >
                      <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <RouterLink to='/'>
              <Box sx={{marginRight: '2rem'}}>
                <img src={logo} width='40' height='40' alt='Brodie React Template' />
              </Box>
            </RouterLink>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
              <Tabs 
                textColor='inherit'                
                value={activeTabIndex === -1 ? false : activeTabIndex} 
                onChange={handleTabChange} 
                aria-label="tabs"
                variant='scrollable'
                scrollButtons='auto'
              >
                {pages.map((page, index) => (                  
                  <Tab 
                    label={page.title} 
                    key={page.title} 
                    component={RouterLink}
                    to={page.slug}
                    {...a11yProps(index)} 
                    sx={{fontSize: '1.1rem', ...page.appBarSx}}
                  />                                 
                ))} 
              </Tabs>
            </Box>
            
            <LanguagePicker />            

            <DarkMode />

            { auth.isAuthenticated ?
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircle />                    
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">Hi, {auth?.user?.profile?.given_name} {auth?.user?.profile?.family_name}</Typography>
                  </MenuItem>

                  <MenuItem onClick={handleAccountSettingsClick}>
                    <Typography textAlign="center">Settings</Typography>
                  </MenuItem>

                  <MenuItem onClick={handleLogoutClick}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                  
                </Menu>
              </Box>
            :
              <>                
                <Button onClick={handleLogInClick}>
                  Log in
                </Button>
              </>
            }
          </Toolbar>
        </Container>
      </AppBar>

      <Divider 
        sx={{ 
          borderBottomWidth: 5, 
          color: 'baseBackground.main', 
          borderColor: 'baseBackground.main'
        }} 
      />
      
    </>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}