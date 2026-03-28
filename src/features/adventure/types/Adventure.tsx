export type Era =
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
    era: Era
    type: AdventureType
    description: string
    stats: {
        danger: number
        knowledge: number
        vp: number
    }
    special?: string
    enemy?: AdventureEnemy
    locations: Location[]
    plots?: Plots
    characters?: CharactersTable
    specialCharacters?: SpecialCharacter[]
}

export type AdventureEnemy = {
    dice: string
    table: RollTable[]
}

export type Location = {
    tag: string
    name: string
    tags?: string[]
    movement: Movement
    description: string
    encounter: Encounter
}

export type Movement = {
    type: string
    value: number
}

export type Encounter = {
    dice: string
    table: RollTable[]
}

export type RollTable = {
    roll: string
    name: string
    description?: string
    type?: string[]
    stats?: CharacterStats
}

export type Plots = {
    dice: string
    table: RollTable[]
}

export type CharactersTable = {
    dice: string
    table: CharacterEntry[]
}

export type CharacterStats = {
    brains: number
    brawn: number
    bravery: number
    skills?: string[]
}

export type CharacterEntry = {
    roll: string
    name: string
    description: string
    charmRoll?: RollTable[]
    type?: string[]
    stats?: CharacterStats
    infomation?: string
}

export type SpecialCharacter = {
    name: string
    description: string
    type: string[]
    stats: CharacterStats
    information: string
}
