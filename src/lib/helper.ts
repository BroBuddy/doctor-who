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

export const makeUrlsClickable = (content: string) => {
    if (!content) return ''

    const rulesRegex = /[R]\d{3}[A-Z]?/g
    return content.replace(rulesRegex, (match: string) => {
        const ruleId = match.replace(/\s+/g, '-')
        return `<span data-rule-link="${ruleId}" class="ruleTag pointer text-bold text-purple">${ruleId}</span>`
    })
}
