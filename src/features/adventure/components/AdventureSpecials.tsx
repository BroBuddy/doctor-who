import React from 'react'
import type { AdventureSpecial } from '../types/AdventureType'
import AllyCard from '@/components/AllyCard'

type Props = {
    specials: AdventureSpecial[]
}

const AdventureSpecials: React.FC<Props> = ({ specials }) => {
    if (!specials) {
        return null
    }

    return (
        <>
            {specials.map((character: AdventureSpecial) => (
                <React.Fragment key={character.id}>
                    <p className="mb-1">
                        <strong>{character.ally.name}:</strong>
                    </p>

                    <p>{character.description}</p>
                    <p>{character.information}</p>

                    <AllyCard ally={character.ally} />
                </React.Fragment>
            ))}
        </>
    )
}

export default AdventureSpecials
