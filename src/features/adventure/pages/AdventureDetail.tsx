import { useEffect, useMemo } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getAdventureByTag } from '../services/AdventureService'
import useGameStore from '@/features/game/store/useGameStore'
import Header from '@/components/Header'

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
            <Header />
            <div className="mt-25">
                <Outlet />
            </div>
        </>
    )
}

export default AdventureDetail
