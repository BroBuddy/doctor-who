import React from 'react'
import type { EnemyEvent } from '../types/EnemyType'
import RollItem from '@/features/adventure/components/RollItem'

type Props = {
    events: EnemyEvent[]
}

const EnemyEvents: React.FC<Props> = ({ events }) => {
    if (!events) {
        return null
    }

    return (
        <>
            <p className="mb-2">
                <strong>Events</strong> (Roll 1D6):
            </p>
            {events.map((item: EnemyEvent, index: number) => (
                <div key={index} className="mb-2">
                    <RollItem key={index} roll={item.roll} name={item.name}>
                        <p>{item.description}</p>
                    </RollItem>
                </div>
            ))}
        </>
    )
}

export default EnemyEvents
