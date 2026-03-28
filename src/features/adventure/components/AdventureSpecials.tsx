import React from 'react'
import type { SpecialCharacter } from '../types/Adventure'
import Badge from '@/components/Badge'
import CharacterAttributes from './CharacterStats'

type Props = {
    specialCharacters: SpecialCharacter[]
}

const AdventureSpecials: React.FC<Props> = ({ specialCharacters }) => {
    if (!specialCharacters) {
        return null
    }

    return (
        <>
            {specialCharacters.map((character: SpecialCharacter) => (
                <>
                    <p className="mb-1">
                        <strong>{character.name}:</strong>
                    </p>

                    <img
                        src={`/images/characters/${character.tag}.jpg`}
                        alt={character.name}
                    />

                    {character.stats && (
                        <CharacterAttributes stats={character.stats} />
                    )}

                    {character.skills && (
                        <p>
                            {character.skills.map((skill, index) => (
                                <Badge
                                    key={index}
                                    text={skill}
                                    variant="light"
                                />
                            ))}
                        </p>
                    )}

                    <p>{character.description}</p>

                    <p>{character.information}</p>
                </>
            ))}
        </>
    )
}

export default AdventureSpecials
