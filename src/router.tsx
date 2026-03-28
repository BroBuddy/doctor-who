import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const Game = React.lazy(() => import('./pages/Game.tsx'))
const Adventures = React.lazy(
    () => import('./features/adventures/pages/Adventures.tsx')
)

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/adventures', element: <Adventures /> },
        ],
    },
])
