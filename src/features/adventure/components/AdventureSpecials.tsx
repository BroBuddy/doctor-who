import React from 'react'
import type { Specials } from '../types/AdventureType'
import CharacterCard from '@/components/CharacterCard'

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
                <React.Fragment key={character.tag}>
                    <p className="mb-1">
                        <strong>{character.name}:</strong>
                    </p>

                    <p>{character.description}</p>
                    <p>{character.information}</p>

                    <CharacterCard character={character} />
                </React.Fragment>
            ))}
        </>
    )
}

export default AdventureSpecials
