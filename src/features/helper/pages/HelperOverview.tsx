import { Link } from 'react-router-dom'
import { getPrefixByTag } from '@/lib/helper'
import HelperHistory from '@/features/helper/components/HelperHistory'
import Card from '@/components/Card'
import useGameStore from '@/features/game/store/useGameStore'
import type { BookletItem } from '@/features/booklet/types/BookletType'

function HelperOverview() {
    const lockedFavorites = useGameStore((state) => state.lockedFavorites)
    const adventure = useGameStore((state) => state.adventure)
    const enemy = useGameStore((state) => state.enemy)

    return (
        <>
            <Card icon="🚀" headline="Adventure">
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
                            "Your journey has just begun; no adventure has been
                            reached so far."
                        </em>
                    </p>
                )}
            </Card>

            <Card icon="⚔️" headline="Enemy">
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

            <Card icon="⭐" headline="Frequently Used">
                {lockedFavorites.map((item: BookletItem) => (
                    <div
                        key={item.tag}
                        className="flex justify-start items-center"
                    >
                        <Link
                            to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                            className="px-2 pt-2 pb-2 w-3 bg-light-blue rounded mr-2 mb-1 text-center"
                        >
                            <span className="text-sm">{item.tag}</span>
                        </Link>
                        <span className="text-sm">{item.title}</span>
                    </div>
                ))}
            </Card>

            <HelperHistory />
        </>
    )
}

export default HelperOverview
