import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { RequireAuth } from 'src/components/RequireAuth'

import { AppLayout } from 'src/routes/_app/AppLayout'
import { HomeRoute } from 'src/routes/_home/HomeRoute'
import { MyClassesRoute } from 'src/routes/school/my-classes/MyClassesRoute'
import { MyTeachersRoute } from 'src/routes/school/my-teachers/MyTeachersRoute'
import { MySchoolsRoute } from 'src/routes/school/my-schools/MySchoolsRoute'
import { NoMatch404Route } from 'src/routes/_app/NoMatch404Route'

export const AppRoutes = () => {
  
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        
        <Route path='/' element={<AppLayout />} >
          <Route index element={<HomeRoute />} />

          <Route path='school/my-classes' element={
            /*<RequireAuth>*/  // When you wire up an OAuth 2.0 service, you can uncomment this comment.
              <MyClassesRoute />
            /*</RequireAuth>*/
          } />
          
          <Route path='school/my-teachers' element={
            /*<RequireAuth>*/  // When you wire up an OAuth 2.0 service, you can uncomment this comment.
              <MyTeachersRoute />
            /*</RequireAuth>*/
          } />
          
          <Route path='school/my-schools' element={
            /*<RequireAuth>*/  // When you wire up an OAuth 2.0 service, you can uncomment this comment.
              <MySchoolsRoute />
            /*</RequireAuth>*/
          } />

          <Route path="*" element={<NoMatch404Route />} />

        </Route>
      </Routes>
    </BrowserRouter>      
  )
}