import { adventureData } from '../data/adventureData'
import type {
    Adventure,
    AdventureCharacter,
    AdventureLocation,
    AdventurePlot,
    AdventureSpecial,
} from '../types/AdventureType'

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

const getAdventureLocationsByTag = (tag: string): AdventureLocation[] => {
    const adventure = getAdventureByTag(tag)
    return adventure.locations ?? []
}

const getAdventurePlotsByTag = (tag: string): AdventurePlot[] => {
    const adventure = getAdventureByTag(tag)
    return adventure.plots ?? []
}

const getAdventureCharactersByTag = (tag: string): AdventureCharacter[] => {
    const adventure = getAdventureByTag(tag)
    return adventure.characters ?? []
}

const getAdventureSpecialsByTag = (tag: string): AdventureSpecial[] => {
    const adventure = getAdventureByTag(tag)
    return adventure.specials ?? []
}

export {
    getAdventureData,
    getAdventureByTag,
    getAdventureLocationsByTag,
    getAdventurePlotsByTag,
    getAdventureCharactersByTag,
    getAdventureSpecialsByTag,
}
