import React from 'react'
import type { SpecialCharacter as SpecialCharacterType } from '../types/Adventure'
import Badge from '@/components/Badge'

type Props = {
    character: SpecialCharacterType
}

const SpecialsView: React.FC<Props> = ({ character }) => {
    return (
        <>
            <p className="mb-1">
                <strong>{character.name}:</strong>
            </p>

            <img
                src={`/images/characters/${character.tag}.jpg`}
                alt={character.name}
            />

            {character.stats && (
                <p>
                    <Badge
                        icon="🧠"
                        text={`Brains ${character.stats.brains}`}
                    />{' '}
                    <Badge icon="💪" text={`Brawn ${character.stats.brawn}`} />{' '}
                    <Badge
                        icon="🫀"
                        text={`Bravery ${character.stats.bravery}`}
                    />{' '}
                </p>
            )}

            {character.skills && (
                <p>
                    {character.skills.map((skill, index) => (
                        <Badge key={index} text={skill} variant="light" />
                    ))}
                </p>
            )}

            <p>{character.description}</p>

            <p>{character.information}</p>
        </>
    )
}

export default SpecialsView
