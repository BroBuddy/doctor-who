import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdventureLocations from './features/adventure/components/AdventureLocations.tsx'
import AdventurePlots from './features/adventure/components/AdventurePlots.tsx'
import AdventureCharacters from './features/adventure/components/AdventureCharacters.tsx'
import AdventureSpecials from './features/adventure/components/AdventureSpecials.tsx'
import AdventureView from './features/adventure/components/AdventureView.tsx'
import EnemyView from './features/enemy/components/EnemyView.tsx'
import EnemyLairView from './features/enemy/components/EnemyLairView.tsx'
import EnemyGoals from './features/enemy/components/EnemyGoals.tsx'
import EnemyEvents from './features/enemy/components/EnemyEvents.tsx'
import CharactersAndConcepts from './pages/CharactersAndConcepts.tsx'
import AdventureDetail from './features/adventure/pages/AdventureDetail.tsx'
import BookletOverview from './features/booklet/pages/BookletOverview.tsx'
import EnemyDetail from './features/enemy/pages/EnemyDetail.tsx'
import Game from './features/game/pages/Game.tsx'
import HelperOverview from './features/helper/pages/HelperOverview.tsx'
import RuleDetail from './features/rule/pages/RuleDetail.tsx'
import ActionTables from './features/tables/pages/ActionTables.tsx'
import TardisDetail from './features/tardis/pages/TardisDetail.tsx'
import TardisCharactersAndFriends from './pages/TardisCharactersAndFriends.tsx'
import Adventures from './pages/Adventures.tsx'

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
        ],
    },
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}
