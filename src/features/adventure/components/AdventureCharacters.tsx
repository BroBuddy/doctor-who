import type { AdventureCharacter, Rolls, Stats } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import { getAdventureCharactersByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import Dice from '@/components/Dice'
import CharacterStats from './CharacterStats'

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

                    <CharacterStats
                        stats={character.stats as Stats}
                        skills={character.skills as string[]}
                    />
                </>
            ),
        })
    )

    return (
        <Card headline="Characters">
            <p className="flex">
                <strong className="mr-1">Roll:</strong> 2D6 <Dice dice={2} />
            </p>

            <Accordion items={items} />
        </Card>
    )
}

export default AdventureCharacters
