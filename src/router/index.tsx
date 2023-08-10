import { lazy, ReactNode, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]
