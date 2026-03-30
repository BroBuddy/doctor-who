import { Headline } from '@/components/Headline'
import useFavoriteStore from '../store/useFavoriteStore'
import type { Favorite } from '../types/FavoriteType'
import { Link } from 'react-router-dom'
import { getPrefixByTag } from '@/lib/helper'
import RemoveFavorite from '../components/RemoveFavorite'
import HelperHistory from '@/features/helper/components/HelperHistory'

function HelperOverview() {
    const lockedFavorites = useFavoriteStore((state) => state.lockedFavorites)
    const userFavorites = useFavoriteStore((state) => state.userFavorites)

    return (
        <>
            {userFavorites.length >= 1 && (
                <div>
                    <Headline>⭐ Your Favorites</Headline>

                    <ul>
                        {userFavorites.map((item: Favorite) => (
                            <li
                                key={item.tag}
                                className="flex justify-between p-1"
                            >
                                <Link
                                    to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                                    className="w-5 text-md"
                                >
                                    {item.tag}
                                </Link>
                                <span className="text-md">
                                    {item.title}{' '}
                                    <RemoveFavorite tag={item.tag} />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div>
                <Headline>🔒 Frequently Used</Headline>

                <ul>
                    {lockedFavorites.map((item: Favorite) => (
                        <li key={item.tag} className="flex justify-between p-1">
                            <Link
                                to={`/${getPrefixByTag(item.tag)}/${item.tag}`}
                                className="w-5 text-md"
                            >
                                {item.tag}
                            </Link>
                            <span className="text-md">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <HelperHistory />
        </>
    )
}

export default HelperOverview
