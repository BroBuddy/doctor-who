import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

export const EnemyDetail = lazy(() => import('./pages/EnemyDetail'))
export const EnemyView = lazy(() => import('./components/EnemyView'))
export const EnemyGoals = lazy(() => import('./components/EnemyGoals'))
export const EnemyEvents = lazy(() => import('./components/EnemyEvents'))
export const EnemyLairView = lazy(() => import('./components/EnemyLairView'))

export const enemyRoutes: RouteObject[] = [
    {
        path: '/enemy/:tag',
        element: <EnemyDetail />,
        children: [
            { index: true, element: <EnemyView /> },
            { path: 'goals', element: <EnemyGoals /> },
            { path: 'events', element: <EnemyEvents /> },
            { path: 'lair', element: <EnemyLairView /> },
        ],
    },
]
