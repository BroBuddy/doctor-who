import type { BookletItem } from '@/features/booklet/types/BookletType'

export type GameState = {
    lockedFavorites: BookletItem[]
    userFavorites: BookletItem[]
    adventure: BookletItem | null
    enemy: BookletItem | null
    addFavorite: (tag: string, title: string) => void
    setAdventure: (tag: string, title: string) => void
    setEnemy: (tag: string, title: string) => void
    removeFavorite: (tag: string) => void
    getLockedFavorites: () => BookletItem[]
    getUserFavorites: () => BookletItem[]
}
