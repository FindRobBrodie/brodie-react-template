import { Box,  Container,  Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const HomeRoute = () => {
  const { t } = useTranslation()

  return (
    <Container maxWidth='xl'>
      <Box sx={{display: 'flex', flexDirection: 'column', pt: '4rem'}}>
        <Typography sx={{fontSize: '4rem', lineHeight: '1', fontWeight: '900', mb: 4}}>
          {t('project-name', 'Brodie React Template')}
        </Typography>
        <Typography mb={2}>
          {t('home-description', 'Congrats on setting up this project!')}
        </Typography>        
      </Box>        
    </Container>
  )
}