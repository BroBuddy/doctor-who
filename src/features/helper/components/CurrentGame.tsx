import Card from '@/components/Card'
import useGameStore from '@/features/game/store/useGameStore'
import { Link } from 'react-router-dom'

function CurrentGame() {
    const adventure = useGameStore((state) => state.adventure)
    const enemy = useGameStore((state) => state.enemy)

    return (
        <>
            <Card icon="🚀" headline="Current Game">
                {adventure?.tag ? (
                    <div className="flex justify-start items-center">
                        <Link
                            to={`/adventure/${adventure.tag}`}
                            className="px-2 pt-1 pb-2 w-3 bg-light-blue rounded mr-2 mb-1 text-center"
                        >
                            <span className="text-sm">{adventure.tag}</span>
                        </Link>

                        <span className="text-sm">{adventure.title}</span>
                    </div>
                ) : (
                    <p className="text-xs">
                        <em>
                            "Your journey has just begun; no adventure yet."
                        </em>
                    </p>
                )}

                {enemy?.tag ? (
                    <div className="flex justify-start items-center">
                        <Link
                            to={`/enemy/${enemy.tag}`}
                            className="px-2 pt-1 pb-2 w-3 bg-light-blue rounded mr-2 mb-1 text-center"
                        >
                            <span className="text-sm">{enemy.tag}</span>
                        </Link>

                        <span className="text-sm">{enemy.title}</span>
                    </div>
                ) : (
                    <p className="text-xs">
                        <em>
                            „No enemy has revealed themselves yet – stay alert!“
                        </em>
                    </p>
                )}
            </Card>
        </>
    )
}
export default CurrentGame
