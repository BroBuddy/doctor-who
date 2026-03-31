import { useParams } from 'react-router-dom'
import { getEnemyEventsByTag } from '../services/EnemyService'
import type { EnemyEvent } from '../types/EnemyType'
import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'
import Dice from '@/components/Dice'

function EnemyEvents() {
    const { tag } = useParams()
    const events = getEnemyEventsByTag(String(tag))

    if (!events) {
        return null
    }

    const items = events.map((item: EnemyEvent, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: <p>{item.description}</p>,
    }))

    return (
        <Card headline="Events">
            <p className="flex">
                <strong className="mr-1">Roll:</strong> 1D6 <Dice />
            </p>

            <Accordion items={items} />
        </Card>
    )
}

export default EnemyEvents
