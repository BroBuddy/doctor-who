export type Adventure = {
    id: number
    tag: string
    title: string
    year: number | null
    tardis: number | null
    era: AdventureEra | null
    type: AdventureType | null
    description: string
    stats: AdventureStats
    special: string
    enemy: AdventureEnmy[]
    locations: AdventureLocation[]
    plots: AdventurePlot[]
    characters: AdventureCharacter[]
    specials: AdventureSpecial[]
}

export type AdventureEra =
    | 'Medieval Era'
    | 'Renaissance Era'
    | 'Victorian Era'
    | 'World War Era'
    | 'Modern Era'
    | 'Post-Modern Era'
    | 'Near Future Era'
    | 'Future Era'
    | 'Far Future Era'
    | 'Twilight Era'
    | 'Colonial Era'
    | 'Antiquity Era'
    | 'Regency Era'

export type AdventureType =
    | 'Holiday'
    | 'Mission'
    | 'Investigation'
    | 'Combat'
    | 'Wilderness'
    | 'Space'

export type AdventureStats = {
    danger: number
    knowledge: number
    vp: number
}

export type AdventureEnmy = {
    roll: string
    name: string
}

export type AdventureLocation = {
    roll: string
    name: string
    move: number | string | null
    terrain: string | null
    description: string
    encounter: string
    rolls: Rolls[]
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
    stats?: Stats
    skills?: string[]
    infomation?: string
}

export type AdventureSpecial = {
    id: number
    image: string | null
    name: string
    description: string
    information: string
    stats: Stats | null
    skills: string[] | []
}

export type Stats = {
    brains: number
    brawn: number
    bravery: number
}
