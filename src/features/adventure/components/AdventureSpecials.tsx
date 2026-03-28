import React from 'react'
import type { Specials } from '../types/AdventureType'
import AllyCard from '@/components/AllyCard'

type Props = {
    specialCharacters: Specials[]
}

const AdventureSpecials: React.FC<Props> = ({ specialCharacters }) => {
    if (!specialCharacters) {
        return null
    }

    return (
        <>
            {specialCharacters.map((character: Specials) => (
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
