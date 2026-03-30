import React from 'react'
import type { Enemy } from '../types/EnemyType'
import EnemyEvents from './EnemyEvents'
import EnemyGoals from './EnemyGoals'

type Props = {
    enemy: Enemy
}

const EnemyTables: React.FC<Props> = ({ enemy }) => {
    return (
        <>
            <EnemyGoals goals={enemy.goals} />
            <EnemyEvents events={enemy.events} />
        </>
    )
}

export default EnemyTables
