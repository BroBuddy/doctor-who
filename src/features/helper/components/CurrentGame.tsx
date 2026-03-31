import Card from '@/components/Card'
import useGameStore from '@/features/game/store/useGameStore'
import GameEntity from './GameEntity'

function CurrentGame() {
    const adventure = useGameStore((state) => state.adventure)
    const enemy = useGameStore((state) => state.enemy)

    return (
        <>
            <Card icon="🚀" headline="Current Game">
                <GameEntity
                    tag={adventure?.tag}
                    title={adventure?.title}
                    linkBase="adventure"
                    emptyText='"Your journey has just begun; no adventure yet."'
                />

                <GameEntity
                    tag={enemy?.tag}
                    title={enemy?.title}
                    linkBase="enemy"
                    emptyText="„No enemy has revealed themselves yet – stay alert!“"
                />
            </Card>
        </>
    )
}
export default CurrentGame
