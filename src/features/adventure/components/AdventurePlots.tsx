import React from 'react'
import type { Plots, RollTable } from '../types/AdventureType'
import RollItem from './RollItem'

type Props = {
    plots: Plots
}

const AdventurePlots: React.FC<Props> = ({ plots }) => {
    if (!plots) {
        return null
    }

    return (
        <>
            <p className="mb-2">
                <strong>Plots</strong> (Roll {plots.dice}):
            </p>
            {plots.table.map((item: RollTable, index: number) => (
                <div key={index} className="mb-2">
                    <RollItem key={index} roll={item.roll} name={item.name!}>
                        <p>{item.description}</p>
                    </RollItem>
                </div>
            ))}
        </>
    )
}

export default AdventurePlots
