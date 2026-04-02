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

    const items = specials.map((item: AdventureSpecial) => ({
        id: String(item.id),
        label: item.name,
        children: (
            <>
                {item.image && (
                    <CroppedImage
                        height={150}
                        width={200}
                        src={`/images/specials/${item.image}.png`}
                    />
                )}

                <p>{item.description}</p>
                <p>{item.information}</p>

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

export default AdventureSpecials
