import React from 'react'
import type { AdventureLocation, Rolls } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import Badge from '@/components/Badge'

type Props = {
    locations: AdventureLocation[]
}

const AdventureLocations: React.FC<Props> = ({ locations }) => {
    if (!locations || locations.length === 0) {
        return null
    }

    const items = locations.map((item: AdventureLocation, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: (
            <>
                {item.tags &&
                    item.tags.map((item: string, index: number) => (
                        <Badge key={index} text={item} variant="light" />
                    ))}

                <p>{item.description}</p>

                <p>Encounter ({item.encounter}):</p>

                {item.rolls && (
                    <ul className="mb-3">
                        {item.rolls.map((roll: Rolls, i: number) => (
                            <li key={i}>
                                <strong className="mr-1">{roll.roll}:</strong>
                                <span>{roll.description}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        ),
    }))

    return (
        <>
            <p className="mb-2">
                <strong>Locations</strong>:
            </p>

            <Accordion items={items} />
        </>
    )
}

export default AdventureLocations
