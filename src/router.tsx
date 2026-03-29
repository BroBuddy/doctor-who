import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const Game = React.lazy(() => import('./features/game/pages/Game.tsx'))
const History = React.lazy(() => import('./pages/History.tsx'))
const BookletOverview = React.lazy(
    () => import('./features/booklet/pages/BookletOverview.tsx')
)
const RuleDetail = React.lazy(
    () => import('./features/rule/pages/RuleDetail.tsx')
)
const TardisDetail = React.lazy(
    () => import('./features/tardis/pages/TardisDetail.tsx')
)
const AdventureDetail = React.lazy(
    () => import('./features/adventure/pages/AdventureDetail.tsx')
)
const EnemyDetail = React.lazy(
    () => import('./features/enemy/pages/EnemyDetail.tsx')
)

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/history', element: <History /> },
            { path: '/booklet', element: <BookletOverview /> },
            { path: '/rule/:tag', element: <RuleDetail /> },
            { path: '/tardis/:tag', element: <TardisDetail /> },
            { path: '/adventure/:tag', element: <AdventureDetail /> },
            { path: '/enemy/:tag', element: <EnemyDetail /> },
        ],
    },
])
