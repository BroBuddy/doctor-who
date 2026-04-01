import type { AdventureLocation, Rolls } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import { getAdventureLocationsByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'

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
                <div className="flex flex-row items-top">
                    <div className="mt-3 mr-5">
                        <img
                            src={`/images/locations/${tag}-${index + 1}.png`}
                            className="w-16"
                            alt={item.name}
                            onError={(e) => {
                                const img = e.currentTarget
                                img.onerror = null
                                img.src = `/images/adventures/${tag}.png`
                            }}
                        />
                    </div>
                    <p>
                        {item.terrain && (
                            <em className="mr-1">({item.terrain})</em>
                        )}
                        {item.description}
                    </p>
                </div>

                <p>
                    <strong>Encounter:</strong> <em>({item.encounter})</em>
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
        <Card>
            <Accordion items={items} />
        </Card>
    )
}

export default AdventureLocations
