import React from 'react'
import type { AdventureCharacter, Rolls } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import Badge from '@/components/Badge'

type Props = {
    characters: AdventureCharacter[]
}

const AdventureCharacters: React.FC<Props> = ({ characters }) => {
    if (!characters) {
        return null
    }

    const items = characters.map(
        (character: AdventureCharacter, index: number) => ({
            id: String(index),
            label: `${character.roll} – ${character.name}`,
            children: (
                <>
                    <p>{character.description}</p>
                    {character.rolls && (
                        <ul className="mb-3">
                            {character.rolls.map((roll: Rolls, i: number) => (
                                <li key={i}>
                                    <strong className="mr-1">
                                        {roll.roll}:
                                    </strong>
                                    <span>{roll.description}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {character.stats && (
                        <p>
                            <Badge
                                icon="🧠"
                                text={`${character.stats.brains} Brains`}
                            />
                            <Badge
                                icon="💪"
                                text={`${character.stats.brawn} Brawn`}
                            />
                            <Badge
                                icon="🫀"
                                text={`${character.stats.bravery} Bravery`}
                            />
                        </p>
                    )}

                    {character.skills && (
                        <p>
                            {character.skills.map((item: string) => (
                                <Badge key={item} text={item} variant="light" />
                            ))}
                        </p>
                    )}
                </>
            ),
        })
    )

    return (
        <>
            <p className="mb-2">
                <strong>Characters</strong> (Roll 2D6):
            </p>

            <Accordion items={items} />
        </>
    )
}

export default AdventureCharacters
