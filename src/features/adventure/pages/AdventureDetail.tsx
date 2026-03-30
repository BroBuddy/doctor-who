import { useEffect, useMemo } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getAdventureByTag } from '../services/AdventureService'
import useGameStore from '@/features/game/store/useGameStore'
import Header, { type NavItem } from '@/components/Header'

const adventureTabs: NavItem[] = [
    { label: 'Adventure', path: '' },
    { label: 'Locations', path: '/locations' },
    { label: 'Plots', path: '/plots' },
    { label: 'Characters', path: '/characters' },
    { label: 'Specials', path: '/specials' },
]

function AdventureDetail() {
    const { tag } = useParams()
    const adventure = useMemo(() => getAdventureByTag(String(tag)), [tag])
    const setAdventure = useGameStore((state) => state.setAdventure)

    useEffect(() => {
        if (adventure) {
            setAdventure(adventure.tag, adventure.title)
        }
    }, [setAdventure, adventure])

    if (!adventure) {
        return null
    }

    return (
        <>
            <Header
                basePath="/adventure"
                tabs={adventureTabs}
                data={adventure}
            />

            <div className="mt-25">
                <Outlet />
            </div>
        </>
    )
}

export default AdventureDetail
