import { adventureData } from '../data/adventureData'
import type { Adventure } from '../types/AdventureType'

const getAdventureData = (): Pick<
    Adventure,
    'id' | 'tag' | 'title' | 'year' | 'description'
>[] => {
    return adventureData.map(({ id, tag, title, year, description }) => ({
        id,
        tag,
        title,
        year,
        description,
    }))
}

const getAdventureByTag = (tag: string): Adventure => {
    return adventureData.find(
        (item: Adventure) => item.tag === tag
    ) as Adventure
}

export { getAdventureData, getAdventureByTag }
