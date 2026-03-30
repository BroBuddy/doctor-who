import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookletOverview from './features/booklet/pages/BookletOverview.tsx'
import Game from './features/game/pages/Game.tsx'
import HelperOverview from './features/helper/pages/HelperOverview.tsx'
import TardisDetail from './features/tardis/pages/TardisDetail.tsx'
import RuleRouter from './features/rule/RuleRouter.tsx'
import { Suspense } from 'react'
import Preloader from './components/Preloader.tsx'
import AdventureRouter from './features/adventure/AdventureRouter.tsx'
import EnemyRouter from './features/enemy/EnemyRouter.tsx'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/booklet', element: <BookletOverview /> },
            { path: '/helper', element: <HelperOverview /> },
            { path: '/tardis/:tag', element: <TardisDetail /> },
            ...RuleRouter,
            ...AdventureRouter,
            ...EnemyRouter,
        ],
    },
])

export default function AppRouter() {
    return (
        <Suspense fallback={<Preloader />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}
