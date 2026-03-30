import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CharactersAndConcepts from './pages/CharactersAndConcepts.tsx'
import BookletOverview from './features/booklet/pages/BookletOverview.tsx'
import Game from './features/game/pages/Game.tsx'
import HelperOverview from './features/helper/pages/HelperOverview.tsx'
import RuleDetail from './features/rule/pages/RuleDetail.tsx'
import ActionTables from './features/tables/pages/ActionTables.tsx'
import TardisDetail from './features/tardis/pages/TardisDetail.tsx'
import TardisCharactersAndFriends from './pages/TardisCharactersAndFriends.tsx'
import Adventures from './pages/Adventures.tsx'
import { enemyRouter } from './features/enemy/enemy.router.ts'
import { adventureRouter } from './features/adventure/adventure.router.ts'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/booklet', element: <BookletOverview /> },
            { path: '/helper', element: <HelperOverview /> },
            { path: '/rule/R001', element: <CharactersAndConcepts /> },
            { path: '/rule/R002', element: <TardisCharactersAndFriends /> },
            { path: '/rule/R006', element: <Adventures /> },
            { path: '/rule/R014', element: <ActionTables /> },
            { path: '/rule/:tag', element: <RuleDetail /> },
            { path: '/tardis/:tag', element: <TardisDetail /> },
            ...adventureRouter,
            ...enemyRouter,
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}
