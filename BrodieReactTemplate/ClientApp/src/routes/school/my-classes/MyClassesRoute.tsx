import React from 'react'
import Box from '@mui/material/Box'
import { Container, LinearProgress, Paper, Stack, Typography } from '@mui/material'

//import { useGetMyClassesQuery } from 'src/utils/__generated__/graphql'

export const MyClassesRoute = () => {  
  //const { data, loading, error } = useGetMyDownloadsQuery()

  // Mocking data response from GraphQL server. 
  // When you run the GraphQL server, remove this comment uncomment the hook above!
  const data = {
    data: {
      classes: [
        { id: 1, name: 'Math 101' },
        { id: 2, name: 'Science 101' },
        { id: 3, name: 'Reading' },
        { id: 4, name: 'Gym' }
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
              My classes
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
          
          Classes you are enrolled in: 

          { data?.data?.classes?.map(classRecord => {
            return (
              <Box>
                {classRecord.id} - {classRecord.name}
              </Box>
            )
          })}
          
          
        </Box>
        }  
      </Paper>

    </Container>
  )
}
