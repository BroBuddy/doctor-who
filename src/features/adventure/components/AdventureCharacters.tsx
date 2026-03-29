import React from 'react'
import type { AdventureCharacter, Rolls } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'

type Props = {
    characters: AdventureCharacter[]
}

const AdventureCharacters: React.FC<Props> = ({ characters }) => {
    if (!characters) {
        return null
    }

    const items = characters.map((item: AdventureCharacter, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: (
            <>
                <p>{item.description}</p>
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
                <strong>Characters</strong> (Roll 2D6):
            </p>

            <Accordion items={items} />
        </>
    )
}

export default AdventureCharacters
