import type { AdventureLocation, Rolls } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import { getAdventureLocationsByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import Dice from '@/components/Dice'

function AdventureLocations() {
    const { tag } = useParams()
    const locations = getAdventureLocationsByTag(String(tag))

    if (!locations || locations.length === 0) {
        return null
    }

    const items = locations.map((item: AdventureLocation, index: number) => ({
        id: String(index),
        label: `${item.roll}: ${item.move ? `(M${item.move}) ` : ''}${item.name}`,
        children: (
            <>
                <p>
                    {item.terrain && <em className="mr-1">({item.terrain})</em>}
                    {item.description}
                </p>

                <p>
                    <strong>Encounter ({item.encounter}):</strong>
                </p>

                {item.rolls && (
                    <ul className="mb-3">
                        {item.rolls.map((item: Rolls) => (
                            <li key={item.roll}>
                                <strong className="mr-1">{item.roll}:</strong>
                                <span>{item.description}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        ),
    }))

    return (
        <Card headline="Locations">
            <p className="flex">
                <strong className="mr-1">Roll:</strong> 2D6 <Dice dice={2} /> +
                Running
            </p>
            <Accordion items={items} />
        </Card>
    )
}

export default AdventureLocations
