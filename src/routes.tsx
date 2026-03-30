import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookletOverview from './features/booklet/pages/BookletOverview.tsx'
import Game from './features/game/pages/Game.tsx'
import HelperOverview from './features/helper/pages/HelperOverview.tsx'
import TardisDetail from './features/tardis/pages/TardisDetail.tsx'
import { enemyRouter } from './features/enemy/enemy.router.ts'
import { adventureRouter } from './features/adventure/adventure.router.ts'
import { ruleRouter } from './features/rule/rule.routes.tsx'
import { Suspense } from 'react'
import Preloader from './components/Preloader.tsx'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Game /> },
            { path: '/booklet', element: <BookletOverview /> },
            { path: '/helper', element: <HelperOverview /> },
            { path: '/tardis/:tag', element: <TardisDetail /> },
            ...ruleRouter,
            ...adventureRouter,
            ...enemyRouter,
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
