import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const EnemyDetail = lazy(() => import('./pages/EnemyDetail'))
const EnemyView = lazy(() => import('./components/EnemyView'))
const EnemyGoals = lazy(() => import('./components/EnemyGoals'))
const EnemyEvents = lazy(() => import('./components/EnemyEvents'))
const EnemyLairView = lazy(() => import('./components/EnemyLairView'))

const EnemyRouter: RouteObject[] = [
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

export default EnemyRouter
