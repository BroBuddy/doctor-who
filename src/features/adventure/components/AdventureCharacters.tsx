import type { AdventureCharacter, Rolls, Stats } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import { getAdventureCharactersByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import CharacterStats from './CharacterStats'

function AdventureCharacters() {
    const { tag } = useParams()
    const characters = getAdventureCharactersByTag(String(tag))

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

                <CharacterStats
                    stats={item.stats as Stats}
                    skills={item.skills as string[]}
                />
            </>
        ),
    }))

    return (
        <Card>
            <Accordion items={items} />
        </Card>
    )
}

export default AdventureCharacters
