import type { Ally } from '@/features/adventure/types/AdventureType'
import React from 'react'

type Props = {
    ally: Ally
}

const AllyCard: React.FC<Props> = ({ ally }) => {
    return (
        <div className="text-center w-18 bg-purple p-2 rounded">
            {ally.image && (
                <img
                    src={`/images/characters/${ally.image}.jpg`}
                    alt={ally.name}
                    className="rounded w-18"
                />
            )}

            {ally.name && (
                <div className="text-center text-white text-bold">
                    {ally.name}
                </div>
            )}

            {ally.stats && (
                <div className="flex bg-white p-2 rounded justify-center my-2">
                    <div className="text-sm">
                        <strong>{ally.stats.brains} Brains</strong>
                    </div>
                    <div className="text-sm mx-2">
                        <strong>{ally.stats.brawn} Brawn</strong>
                    </div>
                    <div className="text-sm">
                        <strong>{ally.stats.bravery} Bravery</strong>
                    </div>
                </div>
            )}

            {ally.skills && (
                <div className="flex bg-light-grey p-2 rounded justify-center">
                    <span className="text-sm">
                        {ally.skills.map((item: string, index: number) => {
                            return (
                                <React.Fragment key={item}>
                                    {index >= 1 ? ', ' : ''}
                                    {item}
                                </React.Fragment>
                            )
                        })}
                    </span>
                </div>
            )}
        </div>
    )
}

export default AllyCard
