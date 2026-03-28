import React from 'react'
import type { Enemy } from '../types/EnemyType'
import Badge from '@/components/Badge'
import type { RollTable } from '@/features/adventure/types/AdventureType'

type Props = {
    enemy: Enemy
}

const EnemyView: React.FC<Props> = ({ enemy }) => {
    return (
        <>
            <img src={`/images/enemies/${enemy.tag}.jpg`} alt={enemy.title} />

            {enemy.stats && (
                <p>
                    {enemy.stats.map((item: string, index: number) => (
                        <Badge key={index} text={item} variant="light" />
                    ))}
                </p>
            )}

            <p>{enemy.description}</p>
            <p>{enemy.encounter?.description}</p>

            <ul>
                {enemy.encounter?.table.map(
                    (item: RollTable, index: number) => (
                        <li key={index}>
                            <strong className="mr-1">{item.name}:</strong>
                            <span>{item.description}</span>
                        </li>
                    )
                )}
            </ul>
        </>
    )
}

export default EnemyView
