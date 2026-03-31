import type { AdventurePlot } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'
import { getAdventurePlotsByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import Dice from '@/components/Dice'

function AdventurePlots() {
    const { tag } = useParams()
    const plots = getAdventurePlotsByTag(String(tag))

    if (!plots) {
        return null
    }

    const items = plots.map((item: AdventurePlot, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: <p>{item.description}</p>,
    }))

    return (
        <Card headline="Plots">
            <p className="flex">
                <strong className="mr-1">Roll:</strong> 2D6 <Dice dice={2} />
            </p>
            <Accordion items={items} />
        </Card>
    )
}

export default AdventurePlots
