import React from 'react'
import type { EnemyGoal, GoalOption } from '../types/EnemyType'
import { Accordion } from '@/components/Accordion'

type Props = {
    goals: EnemyGoal[]
}

const EnemyGoals: React.FC<Props> = ({ goals }) => {
    if (!goals) {
        return null
    }

    const items = goals.map((item: EnemyGoal, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: (
            <>
                <p>{`(${item.vp}VP, ${item.type}) ${item.description}`}</p>
                {item.options && (
                    <ul className="mb-3">
                        {item.options.map((option: GoalOption, i: number) => (
                            <li key={i}>
                                <strong className="mr-1">{option.name}:</strong>
                                <span>{option.description}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        ),
    }))

    return (
        <>
            <p className="mb-2">
                <strong>Goals</strong> (Roll 1D6):
            </p>

            <Accordion items={items} />
        </>
    )
}

export default EnemyGoals
