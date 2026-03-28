import type { RollTable } from '@/features/adventure/types/AdventureType'

export type Enemy = {
    id: number
    tag: string
    title: string
    description: number
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
    table: RollTable[]
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
