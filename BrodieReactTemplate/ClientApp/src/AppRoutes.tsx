import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { RequireAuth } from 'src/components/RequireAuth'

import { AppLayout } from 'src/routes/_app/AppLayout'
import { HomeRoute } from 'src/routes/_home/HomeRoute'
import { MyClassesRoute } from 'src/routes/school/my-classes/MyClassesRoute'
import { NoMatch404Route } from 'src/routes/_app/NoMatch404Route'

export const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<AppLayout />} >
          <Route index element={<HomeRoute />} />

          <Route path='school/my-classes' element={
            /*<RequireAuth>*/  // When you wire up an OAuth 2.0 service, you can uncomment this comment.
              <MyClassesRoute />
            /*</RequireAuth>*/
          } />
          
          <Route path="*" element={<NoMatch404Route />} />

        </Route>
      </Routes>
    </BrowserRouter>      
  )
}