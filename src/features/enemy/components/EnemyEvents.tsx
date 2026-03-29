import React from 'react'
import type { EnemyEvent } from '../types/EnemyType'
import { Accordion } from '@/components/Accordion'

type Props = {
    events: EnemyEvent[]
}

const EnemyEvents: React.FC<Props> = ({ events }) => {
    if (!events) {
        return null
    }

    const items = events.map((item: EnemyEvent, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: <p>{item.description}</p>,
    }))

    return (
        <>
            <p className="mb-2">
                <strong>Events</strong> (Roll 1D6):
            </p>

            <Accordion items={items} />
        </>
    )
}

export default EnemyEvents
