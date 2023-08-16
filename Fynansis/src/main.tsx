import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './routes/Login/index.tsx'
import { Register } from './routes/Register/index.tsx'
import { Home } from './routes/Home/index.tsx'
import { Investiment } from './routes/Investiment/index.tsx'

import './styles/global.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Profile } from './routes/Profile/index.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "investiment",
    element: <Investiment />
  },
  {
    path: "profile",
    element: <Profile />
  }
])

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
