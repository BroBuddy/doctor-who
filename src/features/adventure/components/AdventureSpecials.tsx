import { useParams } from 'react-router-dom'
import { getAdventureSpecialsByTag } from '../services/AdventureService'
import type { AdventureSpecial, Stats } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'
import CharacterStats from './CharacterStats'

function AdventureSpecials() {
    const { tag } = useParams()
    const specials = getAdventureSpecialsByTag(String(tag))

    if (!specials) {
        return null
    }

    const items = specials.map((character: AdventureSpecial) => ({
        id: String(character.id),
        label: character.name,
        children: (
            <>
                <p>{character.description}</p>
                <p>{character.information}</p>

                {character.image && (
                    <img
                        src={`/images/specials/${character.image}.png`}
                        alt={character.name}
                    />
                )}

                <CharacterStats
                    stats={character.stats as Stats}
                    skills={character.skills as string[]}
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

export default AdventureSpecials
