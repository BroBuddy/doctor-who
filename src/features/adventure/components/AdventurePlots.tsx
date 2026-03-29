import React from 'react'
import type { AdventurePlot } from '../types/AdventureType'
import { Accordion } from '@/components/Accordion'

type Props = {
    plots: AdventurePlot[]
}

const AdventurePlots: React.FC<Props> = ({ plots }) => {
    if (!plots) {
        return null
    }

    const items = plots.map((item: AdventurePlot, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: <p>{item.description}</p>,
    }))

    return (
        <>
            <p className="mb-2">
                <strong>Plots</strong> (Roll 2D6):
            </p>

            <Accordion items={items} />
        </>
    )
}

export default AdventurePlots
