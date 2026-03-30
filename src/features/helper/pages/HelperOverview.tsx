import HelperHistory from '@/features/helper/components/HelperHistory'
import useGameStore from '@/features/game/store/useGameStore'
import FrequentlyUsed from '../components/FrequentlyUsed'
import CurrentGame from '../components/CurrentGame'

function HelperOverview() {
    const lockedFavorites = useGameStore((state) => state.lockedFavorites)

    return (
        <>
            <CurrentGame />
            <FrequentlyUsed items={lockedFavorites} />
            <HelperHistory />
        </>
    )
}

export default HelperOverview
