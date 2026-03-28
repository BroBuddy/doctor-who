import React from 'react'
import type { EnemyLair } from '../types/EnemyType'
import Badge from '@/components/Badge'

type Props = {
    lair: EnemyLair
}

const EnemyLairView: React.FC<Props> = ({ lair }) => {
    if (!lair) {
        return null
    }

    return (
        <>
            <p className="mb-2">
                <strong>{lair.name}</strong>
            </p>

            {lair.tags && (
                <p>
                    {lair.tags.map((item: string, index: number) => (
                        <Badge key={index} text={item} variant="light" />
                    ))}
                </p>
            )}

            <p>{lair.description}</p>
        </>
    )
}

export default EnemyLairView
