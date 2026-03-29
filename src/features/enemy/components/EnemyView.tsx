import React from 'react'
import type { EncounterTable, Enemy } from '../types/EnemyType'
import Badge from '@/components/Badge'
import { Accordion } from '@/components/Accordion'

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

            <Accordion
                items={
                    enemy.encounter?.table.map(
                        (item: EncounterTable, index: number) => ({
                            id: String(index),
                            label: item.name,
                            children: <p>{item.description}</p>,
                        })
                    ) ?? []
                }
            />
        </>
    )
}

export default EnemyView
