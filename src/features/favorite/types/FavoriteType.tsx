export type Favorite = {
    tag: string
    title: string
}

export type FavoriteState = {
    lockedFavorites: Favorite[]
    userFavorites: Favorite[]
    addFavorite: (tag: string, title: string) => void
    removeFavorite: (tag: string) => void
    getLockedFavorites: () => Favorite[]
    getUserFavorites: () => Favorite[]
}
