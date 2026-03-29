import React from 'react'
import type { AdventureSpecial } from '../types/AdventureType'
import Badge from '@/components/Badge'
import { Accordion } from '@/components/Accordion'

type Props = {
    specials: AdventureSpecial[]
}

const AdventureSpecials: React.FC<Props> = ({ specials }) => {
    if (!specials) {
        return null
    }

    const items = specials.map((character: AdventureSpecial) => ({
        id: String(character.id),
        label: character.name,
        children: (
            <>
                <img
                    src={`/images/characters/${character.image}.jpg`}
                    alt={character.name}
                />

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

                <p>{character.description}</p>
                <p>{character.information}</p>
            </>
        ),
    }))

    return (
        <>
            <p className="mb-2">
                <strong>Specials</strong>
            </p>

            <Accordion items={items} />
        </>
    )
}

export default AdventureSpecials
