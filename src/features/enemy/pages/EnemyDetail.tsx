import { Suspense, useEffect, useMemo } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getEnemyByTag } from '../services/EnemyService'
import useGameStore from '@/features/game/store/useGameStore'
import type { NavItem } from '@/components/Header'
import Header from '@/components/Header'
import Preloader from '@/components/Preloader'

const enemyTabs: NavItem[] = [
    { label: 'Enemy', path: '' },
    { label: 'Goals', path: '/goals' },
    { label: 'Events', path: '/events' },
    { label: 'Lair', path: '/lair' },
]

function EnemyDetail() {
    const { tag } = useParams()
    const enemy = useMemo(() => getEnemyByTag(String(tag)), [tag])
    const setEnemy = useGameStore((state) => state.setEnemy)

    useEffect(() => {
        if (enemy) {
            setEnemy(enemy.tag, enemy.title)
        }
    }, [setEnemy, enemy])

    if (!enemy) {
        return null
    }

    return (
        <>
            <Header basePath="/enemy" tabs={enemyTabs} data={enemy} />

            <div className="mt-25">
                <Suspense fallback={<Preloader />}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    )
}

export default EnemyDetail
