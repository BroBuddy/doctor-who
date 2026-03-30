import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import AdventureLocations from './features/adventure/components/AdventureLocations.tsx'
import AdventurePlots from './features/adventure/components/AdventurePlots.tsx'
import AdventureCharacters from './features/adventure/components/AdventureCharacters.tsx'
import AdventureSpecials from './features/adventure/components/AdventureSpecials.tsx'
import AdventureView from './features/adventure/components/AdventureView.tsx'

const Game = React.lazy(() => import('./features/game/pages/Game.tsx'))
const BookletOverview = React.lazy(
    () => import('./features/booklet/pages/BookletOverview.tsx')
)
const HelperOverview = React.lazy(
    () => import('./features/helper/pages/HelperOverview.tsx')
)
const ActionTables = React.lazy(
    () => import('./features/tables/pages/ActionTables.tsx')
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

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/booklet', element: <BookletOverview /> },
            { path: '/helper', element: <HelperOverview /> },
            { path: '/rule/R014', element: <ActionTables /> },
            { path: '/rule/:tag', element: <RuleDetail /> },
            { path: '/tardis/:tag', element: <TardisDetail /> },
            {
                path: '/adventure/:tag',
                element: <AdventureDetail />,
                children: [
                    { index: true, element: <AdventureView /> },
                    { path: 'locations', element: <AdventureLocations /> },
                    { path: 'plots', element: <AdventurePlots /> },
                    { path: 'characters', element: <AdventureCharacters /> },
                    { path: 'specials', element: <AdventureSpecials /> },
                ],
            },
            { path: '/enemy/:tag', element: <EnemyDetail /> },
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}
