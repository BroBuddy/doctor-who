import type { AdventureLocation, Rolls } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import { getAdventureLocationsByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import CroppedImage from '@/components/CroppedImage'

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
                <CroppedImage
                    height={150}
                    width={200}
                    src={`/images/locations/${tag}-${index + 1}.png`}
                />

                <p>
                    {item.terrain && <em className="mr-1">({item.terrain})</em>}
                    {item.description}
                </p>

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
