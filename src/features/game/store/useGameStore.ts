import { create } from 'zustand'
import type { GameState } from '@/features/game/types/GameType'
import type { BookletItem } from '@/features/booklet/types/BookletType'

const MAX_FAVORITES = 15

const initFavorites: BookletItem[] = [
    { tag: 'R008', title: 'Actions in Adventures' },
    { tag: 'R009', title: 'Enemy Action Rolls' },
    { tag: 'R011', title: 'Incidents' },
    { tag: 'R014', title: 'Action Tables' },
    { tag: 'R018', title: 'Enemy Tables' },
]

const useGameStore = create<GameState>((set, get) => ({
    lockedFavorites: initFavorites,
    userFavorites: [],
    adventure: null as BookletItem | null,
    enemy: null as BookletItem | null,

    addFavorite: (tag: string, title: string) => {
        set((state) => {
            const alreadyExists =
                state.lockedFavorites.some((f) => f.tag === tag) ||
                state.userFavorites.some((f) => f.tag === tag)

            if (alreadyExists) return state
            if (state.userFavorites.length >= MAX_FAVORITES) return state

            return {
                userFavorites: [...state.userFavorites, { tag, title }],
            }
        })
    },
    removeFavorite: (tag: string) => {
        set((state) => ({
            userFavorites: state.userFavorites.filter((f) => f.tag !== tag),
        }))
    },

    setAdventure: (tag: string, title: string) => {
        set({ adventure: { tag, title } })
    },
    clearAdventure: () => {
        set({ adventure: null })
    },

    setEnemy: (tag: string, title: string) => {
        set({ enemy: { tag, title } })
    },
    clearEnemy: () => {
        set({ enemy: null })
    },

    getLockedFavorites: () => Object.values(get().lockedFavorites),
    getUserFavorites: () => get().userFavorites,
    getAdventure: () => get().adventure,
    getEnemy: () => get().enemy,
}))

export default useGameStore
