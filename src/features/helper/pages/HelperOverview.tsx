import useFavoriteStore from '../store/useFavoriteStore'
import type { Favorite } from '../types/FavoriteType'
import { Link } from 'react-router-dom'
import { getPrefixByTag } from '@/lib/helper'
import RemoveFavorite from '../components/RemoveFavorite'
import HelperHistory from '@/features/helper/components/HelperHistory'
import Card from '@/components/Card'

function HelperOverview() {
    const lockedFavorites = useFavoriteStore((state) => state.lockedFavorites)
    const userFavorites = useFavoriteStore((state) => state.userFavorites)

    return (
        <>
            <Card icon="⭐" headline="Your Favorites">
                {userFavorites && (
                    <ul>
                        {userFavorites.map((item: Favorite) => (
                            <li
                                key={item.tag}
                                className="flex justify-between items-center"
                            >
                                <Link
                                    to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                                    className="px-2 pt-2 pb-2 w-3 bg-light-blue rounded mr-1 mb-1 text-center"
                                >
                                    {item.tag}
                                </Link>
                                <span className="text-sm">
                                    {item.title}{' '}
                                    <RemoveFavorite tag={item.tag} />
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </Card>

            <Card icon="🔒" headline="Frequently Used">
                <ul>
                    {lockedFavorites.map((item: Favorite) => (
                        <li
                            key={item.tag}
                            className="flex justify-between items-center"
                        >
                            <Link
                                to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                                className="px-2 pt-2 pb-2 w-3 bg-light-blue rounded mr-1 mb-1 text-center"
                            >
                                {item.tag}
                            </Link>
                            <span className="text-sm">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            <HelperHistory />
        </>
    )
}

export default HelperOverview
