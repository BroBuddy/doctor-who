export type Enemy = {
    id: number
    tag: string
    title: string
    description: string
    special: string | null
    stats: string[]
    encounter: Encounter
    goals: EnemyGoal[]
    events: EnemyEvent[]
    lair: EnemyLair | null
    specialEncounter: Encounter | null
}

export type EnemyEvent = {
    roll: string
    name: string
    description: string
}

export type Encounter = {
    name?: string
    description: string
    table: EncounterTable[]
}

export type EncounterTable = {
    name: string
    description: string
}

export type EnemyGoal = {
    roll: string
    name: string
    vp: number
    type: string
    description: string
    options?: GoalOption[]
}
export type GoalOption = {
    name: string
    description: string
}

export type EnemyLair = {
    name: string
    tags: string[]
    description: string
    table?: LairRoll[]
}

export type LairRoll = {
    roll: string
    description: string
}
