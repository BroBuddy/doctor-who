import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getAdventureByTag } from '../services/AdventureService'
import { Headline } from '@/components/Headline'
import type { SpecialCharacter } from '../types/Adventure'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import SpecialsView from '../components/SpecialsView'
import AdventureView from '../components/AdventureView'
import AdventureLocations from '../components/AdventureLocations'
import AdventurePlots from '../components/AdventurePlots'
import AdventureCharacters from '../components/AdventureCharacters'

function AdventureDetail() {
    const { tag } = useParams()
    const adventure = useMemo(() => getAdventureByTag(String(tag)), [tag])

    if (!adventure) {
        return null
    }

    const tabItems: TabItem[] = [
        {
            label: 'Adventure',
            content: <AdventureView adventure={adventure} />,
        },
        {
            label: 'Locations',
            content: adventure.locations && (
                <AdventureLocations locations={adventure.locations} />
            ),
        },
        {
            label: 'Plots',
            content: adventure.plots && (
                <AdventurePlots plots={adventure.plots} />
            ),
        },
        {
            label: 'Characters',
            content: adventure.characters && (
                <AdventureCharacters characters={adventure.characters} />
            ),
        },
        {
            label: 'Specials',
            content: adventure.specialCharacters && (
                <>
                    {adventure.specialCharacters.map(
                        (item: SpecialCharacter) => (
                            <SpecialsView key={item.tag} character={item} />
                        )
                    )}
                </>
            ),
        },
    ]

    return (
        <>
            <Headline>
                {adventure.tag}. {adventure.title}
            </Headline>

            <Tabs tabs={tabItems} />
        </>
    )
}

export default AdventureDetail
