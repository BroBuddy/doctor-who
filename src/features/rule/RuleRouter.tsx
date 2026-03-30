import Preloader from '@/components/Preloader'
import { lazy, Suspense } from 'react'
import { Outlet, type RouteObject } from 'react-router-dom'

const CharactersAndConcepts = lazy(
    () => import('./pages/CharactersAndConcepts')
)
const TardisCharactersAndFriends = lazy(
    () => import('./pages/TardisCharactersAndFriends')
)
const Adventures = lazy(() => import('./pages/Adventures'))
const ActionsInAdventures = lazy(() => import('./pages/ActionsInAdventures'))
const Incidents = lazy(() => import('./pages/Incidents'))
const ActionTables = lazy(() => import('../tables/pages/ActionTables'))
const RuleDetail = lazy(() => import('./pages/RuleDetail'))

const RuleRouter: RouteObject[] = [
    {
        path: '/rule',
        element: (
            <Suspense fallback={<Preloader />}>
                <Outlet />
            </Suspense>
        ),
        children: [
            { path: 'R001', element: <CharactersAndConcepts /> },
            { path: 'R002', element: <TardisCharactersAndFriends /> },
            { path: 'R006', element: <Adventures /> },
            { path: 'R008', element: <ActionsInAdventures /> },
            { path: 'R011', element: <Incidents /> },
            { path: 'R014', element: <ActionTables /> },
            { path: ':tag', element: <RuleDetail /> },
        ],
    },
]

export default RuleRouter
