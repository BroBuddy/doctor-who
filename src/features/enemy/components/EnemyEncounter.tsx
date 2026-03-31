import { useParams } from 'react-router-dom'
import { getEnemyEncounterByTag } from '../services/EnemyService'
import type { EncounterTable } from '../types/EnemyType'
import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'

function EnemyEncounter() {
    const { tag } = useParams()
    const encounter = getEnemyEncounterByTag(String(tag))

    if (!encounter) {
        return null
    }

    const items = encounter.table.map(
        (item: EncounterTable, index: number) => ({
            id: String(index),
            label: item.name,
            children: <p>{item.description}</p>,
        })
    )

    return (
        <Card headline="Encounter">
            <p>{encounter.description}</p>
            <Accordion items={items} />
        </Card>
    )
}

export default EnemyEncounter
