import React from 'react'
import Box from '@mui/material/Box'
import { Container, LinearProgress, Paper, Stack, Typography } from '@mui/material'

//import { useGetMyTeachersQuery } from 'src/utils/__generated__/graphql'

export const MyTeachersRoute = () => {  
  //const { data, loading, error } = useGetMyTeachersQuery()

  // Mocking data response from GraphQL server. 
  // When you run the GraphQL server, remove this comment uncomment the hook above!
  const data = {
    data: {
      teachers: [
        { id: 1, name: 'Mr. Jones' },
        { id: 2, name: 'Mrs Dow' },        
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
              My teachers
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
          
          { data?.data?.teachers?.map(teacher => {
            return (
              <Box>
                {teacher.id} - {teacher.name}
              </Box>
            )
          })}
          
          
        </Box>
        }  
      </Paper>

    </Container>
  )
}
