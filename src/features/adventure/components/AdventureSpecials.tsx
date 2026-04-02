import { useParams } from 'react-router-dom'
import { getAdventureSpecialsByTag } from '../services/AdventureService'
import type { AdventureSpecial, Stats } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'
import CharacterStats from './CharacterStats'
import CroppedImage from '@/components/CroppedImage'

function AdventureSpecials() {
    const { tag } = useParams()
    const specials = getAdventureSpecialsByTag(String(tag))

    if (!specials) {
        return null
    }

    const items = specials.map(
        (character: AdventureSpecial, index: number) => ({
            id: String(character.id),
            label: character.name,
            children: (
                <>
                    <CroppedImage
                        height={200}
                        width={250}
                        src={`/images/specials/${tag}-${index + 1}.jpg`}
                    />

                    <p>{character.description}</p>
                    <p>{character.information}</p>

                    <CharacterStats
                        stats={character.stats as Stats}
                        skills={character.skills as string[]}
                    />
                </>
            ),
        })
    )

    return (
        <Card>
            <Accordion items={items} />
        </Card>
    )
}

export default AdventureSpecials
