import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

export const AdventureDetail = lazy(
    () => import('@/features/adventure/pages/AdventureDetail')
)
export const AdventureView = lazy(
    () => import('@/features/adventure/components/AdventureView')
)
export const AdventureLocations = lazy(
    () => import('@/features/adventure/components/AdventureLocations')
)
export const AdventurePlots = lazy(
    () => import('@/features/adventure/components/AdventurePlots')
)
export const AdventureCharacters = lazy(
    () => import('@/features/adventure/components/AdventureCharacters')
)
export const AdventureSpecials = lazy(
    () => import('@/features/adventure/components/AdventureSpecials')
)

export const adventureRoutes: RouteObject[] = [
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
