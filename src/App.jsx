import React from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Entry from './pages/Entry'
import Login from './pages/Login'
import Browse from './pages/Browse'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'


const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Entry />
    },
    {
      path: '/browse',
      element: <Browse/>
    },
    {
      path: '/login',
      element: <Login />
    },
  ])



  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App