import Badge from '@/components/Badge'
import { useParams } from 'react-router-dom'
import {
    getEnemyLairByTag,
    getEnemySpecialEncounterByTag,
} from '../services/EnemyService'
import Card from '@/components/Card'
import { Accordion } from '@/components/Accordion'
import type { EncounterTable, LairRoll } from '../types/EnemyType'

function EnemySpecial() {
    const { tag } = useParams()
    const lair = getEnemyLairByTag(String(tag))
    const specialEncounter = getEnemySpecialEncounterByTag(String(tag))

    const items =
        specialEncounter?.table?.map((item: EncounterTable, index: number) => ({
            id: String(index),
            label: item.name,
            children: <p>{item.description}</p>,
        })) ?? []

    if (!lair && !specialEncounter) {
        return null
    }

    return (
        <>
            {lair && (
                <Card>
                    <img
                        src={`/images/enemies/special/${tag}.png`}
                        alt="Special"
                    />

                    {lair.tags && (
                        <div className="mt-2">
                            {lair.tags.map((item: string, index: number) => (
                                <Badge
                                    key={index}
                                    text={item}
                                    variant="light"
                                />
                            ))}
                        </div>
                    )}

                    <p className="mt-5">
                        <strong>{lair.name}:</strong> <br />
                        {lair.description}
                    </p>

                    {lair.table && (
                        <ul>
                            {lair.table.map((item: LairRoll) => (
                                <li key={item.roll}>
                                    <strong className="mr-1">
                                        {item.roll}:
                                    </strong>
                                    <span>{item.description}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </Card>
            )}

            {specialEncounter && (
                <Card>
                    <img
                        src={`/images/enemies/special/${tag}.png`}
                        alt="Special"
                    />

                    <p className="mt-5">
                        <strong>{specialEncounter.name}:</strong> <br />
                        {specialEncounter.description}
                    </p>

                    {items.length > 0 && <Accordion items={items} />}
                </Card>
            )}
        </>
    )
}

export default EnemySpecial
