export type Enemy = {
    id: number
    tag: string
    title: string
    description: string
    stats: string[]
    encounter: Encounter
    goals: EnemyGoal[]
    events: EnemyEvent[]
    lair: EnemyLair
}

export type EnemyEvent = {
    roll: string
    name: string
    description: string
}

export type Encounter = {
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
}
