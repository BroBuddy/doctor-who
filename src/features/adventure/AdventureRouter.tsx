import React from 'react'
import type { RouteObject } from 'react-router-dom'

const AdventureDetail = React.lazy(() => import('./pages/AdventureDetail'))
const AdventureView = React.lazy(() => import('./components/AdventureView'))
const AdventureLocations = React.lazy(
    () => import('./components/AdventureLocations')
)
const AdventurePlots = React.lazy(() => import('./components/AdventurePlots'))
const AdventureCharacters = React.lazy(
    () => import('./components/AdventureCharacters')
)
const AdventureSpecials = React.lazy(
    () => import('./components/AdventureSpecials')
)

const AdventureRouter: RouteObject[] = [
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
]

export default AdventureRouter
