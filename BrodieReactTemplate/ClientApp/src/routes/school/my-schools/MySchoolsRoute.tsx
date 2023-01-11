import React from 'react'
import Box from '@mui/material/Box'
import { Container, LinearProgress, Paper, Stack, Typography } from '@mui/material'

//import { useGetMyTeachersQuery } from 'src/utils/__generated__/graphql'

export const MySchoolsRoute = () => {  
  //const { data, loading, error } = useGetMyTeachersQuery()

  // Mocking data response from GraphQL server. 
  // When you run the GraphQL server, remove this comment uncomment the hook above!
  const data = {
    data: {
      schools: [
        { id: 1, name: 'Little Tikes Elementry', address: '123 Street Rd.' },
        { id: 2, name: 'Washington Middle School', address: '555 Road St.' },        
        { id: 3, name: 'Washington High School', address: '9876 Route 1' },
        { id: 4, name: 'Yale', address: '333 Church Rd.' },
      ]
    }
  }
  const loading = false
  const error = null

  return (
    <Container maxWidth='xl'>
    
      <Paper
        elevation={0}
        sx={{ p: '1rem' }}
      >
        <Stack  sx={{background: 'mainBackground.main'}}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='space-between' sx={{paddingBottom: 2}} >
          
            <Typography variant='h6' sx={{flexGrow: 2}}>
              My schools
            </Typography>

          </Stack>    
        </Stack>

      </Paper>
      
      <Paper
        elevation={0}
        sx={{ p: '1rem', backgroundColor: 'baseBackground.main' }}
      >
        { loading ? <LinearProgress />
          : Boolean(error) ? <p>Error: {error.message}</p> 
          :
        <Box>
          
          { data?.data?.schools?.map(school => {
            return (
              <Box>
                {school.id} - {school.name} - {school.address}
              </Box>
            )
          })}
          
          
        </Box>
        }  
      </Paper>

    </Container>
  )
}
