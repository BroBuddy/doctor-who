export const getPrefixByTag = (tag: string) => {
    const firstLetter = tag.charAt(0)

    switch (firstLetter) {
        case 'A':
            return 'adventure'
        case 'E':
            return 'enemy'
        case 'R':
            return 'rule'
        default:
            return 'tardis'
    }
}

export const formatYear = (year: number) => {
    return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`
}
