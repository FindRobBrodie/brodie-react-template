import { Container } from '@mui/material'

export const NoMatch404Route = () => {
  return (
    <Container maxWidth='xl' sx={{pt: 5}}>
      Something went wrong!  There is no page at this location.  Please use the menu above to navigate to another page.      
    </Container>
  )
}