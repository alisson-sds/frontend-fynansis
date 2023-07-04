import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './routes/Home/index.tsx'
import { Register } from './routes/Register/index.tsx'
import './styles/global.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "register",
    element: <Register />
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
