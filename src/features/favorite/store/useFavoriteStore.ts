import { create } from 'zustand'
import type { Favorite, FavoriteState } from '../types/FavoriteType'

const MAX_USER_FAVORITES = 20

const initFavorites: Favorite[] = [
    { tag: 'R008', title: 'Actions in Adventures' },
    { tag: 'R009', title: 'Enemy Action Rolls' },
    { tag: 'R011', title: 'Incidents' },
    { tag: 'R013', title: 'Skill and Keyword Descriptions' },
    { tag: 'R017', title: 'Doctor Abilities' },
    { tag: 'R018', title: 'Enemy Tables' },
]

const useFavoriteStore = create<FavoriteState>((set, get) => ({
    lockedFavorites: initFavorites,
    userFavorites: [],
    addFavorite: (tag: string, title: string) => {
        set((state) => {
            const alreadyExists =
                state.lockedFavorites.some(
                    (favorite) => favorite.tag === tag
                ) ||
                state.userFavorites.some((favorite) => favorite.tag === tag)

            if (alreadyExists) return state

            if (state.userFavorites.length >= MAX_USER_FAVORITES) return state

            return {
                userFavorites: [...state.userFavorites, { tag, title }],
            }
        })
    },
    removeFavorite: (tag: string) => {
        set((state) => ({
            userFavorites: state.userFavorites.filter(
                (favorite) => favorite.tag !== tag
            ),
        }))
    },
    getLockedFavorites: () => Object.values(get().lockedFavorites),
    getUserFavorites: () => get().userFavorites,
}))

export default useFavoriteStore
