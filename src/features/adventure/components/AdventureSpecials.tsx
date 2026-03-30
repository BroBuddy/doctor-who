import { useParams } from 'react-router-dom'
import { getAdventureSpecialsByTag } from '../services/AdventureService'
import type { AdventureSpecial } from '../types/AdventureType'
import Badge from '@/components/Badge'
import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'

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
                    <div className="flex flex-wrap">
                        {character.skills.map((item: string) => (
                            <div key={item}>
                                <Badge text={item} variant="light" />
                            </div>
                        ))}
                    </div>
                )}
            </>
        ),
    }))

    return (
        <Card headline="Specials">
            <Accordion items={items} />
        </Card>
    )
}

export default AdventureSpecials
