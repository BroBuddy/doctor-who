import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const Game = React.lazy(() => import('./features/game/pages/Game.tsx'))
const TardisOverview = React.lazy(
    () => import('./features/tardis/pages/TardisOverview.tsx')
)
const TardisDetail = React.lazy(
    () => import('./features/tardis/pages/TardisDetail.tsx')
)
const AdventureOverview = React.lazy(
    () => import('./features/adventure/pages/AdventureOverview.tsx')
)
const AdventureDetail = React.lazy(
    () => import('./features/adventure/pages/AdventureDetail.tsx')
)
const EnemyOverview = React.lazy(
    () => import('./features/enemy/pages/EnemyOverview.tsx')
)
const EnemyDetail = React.lazy(
    () => import('./features/enemy/pages/EnemyDetail.tsx')
)

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/tardis', element: <TardisOverview /> },
            { path: '/tardis/:tag', element: <TardisDetail /> },
            { path: '/adventure', element: <AdventureOverview /> },
            { path: '/adventure/:tag', element: <AdventureDetail /> },
            { path: '/enemy', element: <EnemyOverview /> },
            { path: '/enemy/:tag', element: <EnemyDetail /> },
        ],
    },
])
