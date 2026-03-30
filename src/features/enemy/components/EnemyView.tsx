import type { EncounterTable } from '../types/EnemyType'
import Badge from '@/components/Badge'
import { Accordion } from '@/components/Accordion'
import { getEnemyByTag } from '../services/EnemyService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'

function EnemyView() {
    const { tag } = useParams()
    const enemy = getEnemyByTag(String(tag))

    return (
        <Card>
            <img
                src={`/images/enemies/${enemy.tag}.png`}
                alt={enemy.title}
                className="mt-4"
            />

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
        </Card>
    )
}

export default EnemyView
