import React from 'react'
import type { EnemyLair } from '../types/EnemyType'
import Badge from '@/components/Badge'
import { Accordion } from '@/components/Accordion'

type Props = {
    lair: EnemyLair
}

const EnemyLairView: React.FC<Props> = ({ lair }) => {
    if (!lair) {
        return null
    }

    const items = [
        {
            id: 'lair',
            label: lair.name,
            children: (
                <>
                    {lair.tags && (
                        <p>
                            {lair.tags.map((item: string, index: number) => (
                                <Badge
                                    key={index}
                                    text={item}
                                    variant="light"
                                />
                            ))}
                        </p>
                    )}
                    <p>{lair.description}</p>
                </>
            ),
        },
    ]

    return (
        <>
            <p className="mb-2">
                <strong>Lair:</strong>
            </p>

            <Accordion items={items} />
        </>
    )
}

export default EnemyLairView
