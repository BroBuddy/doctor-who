export type Era =
    | 'World War Era'
    | 'Future Era'
    | 'Medieval Era'
    | 'Victorian Era'

export type Type = 'Holiday' | 'Mission' | 'Investigation' | 'Combat'

export type Adventure = {
    id: number
    tag: string
    title: string
    year: number
    tardis: number
    era: Era
    type: Type
    description: string
    stats: AdventureStats
    special?: string
    enemy?: Enemy
    locations: Location[]
    plots?: Plots
    characters?: Characters[]
    specialCharacters?: Specials[]
}

export type AdventureStats = {
    danger: number
    knowledge: number
    vp: number
}

export type Enemy = {
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
    name?: string
    description?: string
    type?: string[]
    stats?: Stats
    skills?: string[]
}

export type Plots = {
    dice: string
    table: RollTable[]
}

export type Characters = {
    roll: string
    name: string
    description: string
    charmRoll?: RollTable[]
    ally?: Ally
    stats?: Stats
    skills?: string[]
    infomation?: string
}

export type Specials = {
    id: number
    description: string
    information: string
    ally: Ally
}

export type Ally = {
    image?: string
    name: string
    stats: Stats
    skills?: string[]
}

export type Stats = {
    brains: number
    brawn: number
    bravery: number
}
