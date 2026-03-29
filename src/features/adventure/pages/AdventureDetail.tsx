import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getAdventureByTag } from '../services/AdventureService'
import { Headline } from '@/components/Headline'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import AdventureView from '../components/AdventureView'
import AdventureLocations from '../components/AdventureLocations'
import AdventurePlots from '../components/AdventurePlots'
import AdventureCharacters from '../components/AdventureCharacters'
import AdventureSpecials from '../components/AdventureSpecials'
import { useHistory } from '@/hooks/useHistory'

function AdventureDetail() {
    const { tag } = useParams()
    const adventure = useMemo(() => getAdventureByTag(String(tag)), [tag])
    const { addToHistory } = useHistory()

    useEffect(() => {
        addToHistory(adventure.tag, adventure.title)
    }, [addToHistory, adventure])

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
            content: adventure.specials && (
                <AdventureSpecials specials={adventure.specials} />
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
