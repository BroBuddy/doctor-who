import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const Game = React.lazy(() => import('./pages/Game.tsx'))
const AdventureOverview = React.lazy(
    () => import('./features/adventure/pages/AdventureOverview.tsx')
)
const AdventureDetail = React.lazy(
    () => import('./features/adventure/pages/AdventureDetail.tsx')
)

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/adventure', element: <AdventureOverview /> },
            { path: '/adventure/:tag', element: <AdventureDetail /> },
        ],
    },
])
