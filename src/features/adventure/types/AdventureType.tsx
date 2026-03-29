export type AdventureEra =
    | 'World War Era'
    | 'Future Era'
    | 'Medieval Era'
    | 'Victorian Era'

export type AdventureType = 'Holiday' | 'Mission' | 'Investigation' | 'Combat'

export type Adventure = {
    id: number
    tag: string
    title: string
    year: number
    tardis: number
    era: AdventureEra
    type: AdventureType
    description: string
    stats: AdventureStats
    special?: string
    enemy?: AdventureEnemy
    locations: AdventureLocation[]
    plots?: AdventurePlot[]
    characters?: AdventureCharacter[]
    specials?: AdventureSpecial[]
}

export type AdventureStats = {
    danger: number
    knowledge: number
    vp: number
}

export type AdventureEnemy = {
    dice: string
    table: Rolls[]
}

export type AdventureLocation = {
    roll: string
    name: string
    tags?: string[]
    description: string
    encounter: string
    rolls: Rolls[]
}

export type Movement = {
    type: string
    value: number
}

export type Rolls = {
    roll: string
    name?: string
    description?: string
    type?: string[]
    stats?: Stats
    skills?: string[]
}

export type AdventurePlot = {
    roll: string
    name: string
    description: string
}

export type AdventureCharacter = {
    roll: string
    name: string
    description: string
    rolls?: Rolls[]
    skills?: string[]
    infomation?: string
}

export type AdventureSpecial = {
    id: number
    image?: string
    name: string
    description: string
    information: string
    stats: Stats
    skills?: string[]
}

export type Stats = {
    brains: number
    brawn: number
    bravery: number
}
