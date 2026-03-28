import React from 'react'
import type { EncounterTable, Enemy } from '../types/EnemyType'
import Badge from '@/components/Badge'

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
                    (item: EncounterTable, index: number) => (
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
