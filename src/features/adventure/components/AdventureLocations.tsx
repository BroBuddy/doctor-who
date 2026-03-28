import React from 'react'
import type { Location } from '../types/AdventureType'
import Badge from '@/components/Badge'

type Props = {
    locations: Location[]
}

const AdventureLocations: React.FC<Props> = ({ locations }) => {
    if (!locations || locations.length === 0) {
        return null
    }

    return (
        <>
            <p className="mb-2">
                <strong>Locations</strong>:
            </p>
            {locations.map((location: Location, index: number) => (
                <>
                    <p key={location.tag} className="mb-2">
                        <Badge text={`${index + 1}.`} />
                        <Badge text={location.name} variant="light" />
                    </p>
                    <p>{location.description}</p>
                </>
            ))}
        </>
    )
}

export default AdventureLocations
