import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

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

export const ruleRoutes: RouteObject[] = [
    { path: '/rule/R001', element: <CharactersAndConcepts /> },
    { path: '/rule/R002', element: <TardisCharactersAndFriends /> },
    { path: '/rule/R006', element: <Adventures /> },
    { path: '/rule/R008', element: <ActionsInAdventures /> },
    { path: '/rule/R011', element: <Incidents /> },
    { path: '/rule/R014', element: <ActionTables /> },
    { path: '/rule/:tag', element: <RuleDetail /> },
]

export const ruleRouter: RouteObject[] = ruleRoutes
