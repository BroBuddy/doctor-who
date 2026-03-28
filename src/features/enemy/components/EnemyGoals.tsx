import React from 'react'
import type { EnemyGoal, GoalOption } from '../types/EnemyType'
import RollItem from '@/features/adventure/components/RollItem'

type Props = {
    goals: EnemyGoal[]
}

const EnemyGoals: React.FC<Props> = ({ goals }) => {
    if (!goals) {
        return null
    }

    return (
        <>
            <p className="mb-2">
                <strong>Goals</strong> (Roll 1D6):
            </p>
            {goals.map((item: EnemyGoal, index: number) => (
                <div key={index} className="mb-2">
                    <RollItem key={index} roll={item.roll} name={item.name}>
                        <p>{`(${item.vp}VP, ${item.type}) ${item.description}`}</p>
                        <ul>
                            {item.options?.map(
                                (item: GoalOption, index: number) => {
                                    return (
                                        <li key={index}>
                                            <strong className="mr-1">
                                                {item.name}:
                                            </strong>
                                            <span>{item.description}</span>
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    </RollItem>
                </div>
            ))}
        </>
    )
}

export default EnemyGoals
