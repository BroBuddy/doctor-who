import type { AdventureCharacter, Rolls } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import Badge from '@/components/Badge'
import { getAdventureCharactersByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'

function AdventureCharacters() {
    const { tag } = useParams()
    const characters = getAdventureCharactersByTag(String(tag))

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
        <Card headline="Characters">
            <Accordion items={items} />
        </Card>
    )
}

export default AdventureCharacters
