import React from 'react'
import type { Adventure, Rolls } from '../types/AdventureType'
import Badge from '@/components/Badge'
import RollItem from './RollItem'

type Props = {
    adventure: Adventure
}

const AdventureView: React.FC<Props> = ({ adventure }) => {
    return (
        <>
            <p>
                <Badge icon="🕒" text={String(adventure.year)} />
                <Badge icon="🌀" text={`Tardis ${adventure.tardis}`} />
                <Badge icon="🌍" text={adventure.era} />
            </p>

            <img
                src={`/images/adventures/${adventure.tag}.jpg`}
                alt={adventure.title}
            />

            {adventure.stats && (
                <p>
                    <Badge
                        icon="⚠️"
                        text={`Danger ${adventure.stats.danger}`}
                        variant="light"
                    />
                    <Badge
                        icon="📚"
                        text={`Knowledge ${adventure.stats.knowledge}`}
                        variant="light"
                    />
                    <Badge
                        icon="⭐"
                        text={`VP ${adventure.stats.vp}`}
                        variant="light"
                    />
                </p>
            )}

            <p>{adventure.description}</p>

            {adventure.special && (
                <p>
                    <em>Special:</em> {adventure.special}
                </p>
            )}

            {adventure.enemy && (
                <>
                    <p className="mb-2">
                        <strong>Enemy</strong> (Roll {adventure.enemy.dice}):
                    </p>

                    {adventure.enemy.table.map((item: Rolls, index: number) => (
                        <RollItem
                            key={index}
                            roll={item.roll}
                            name={item.name!}
                        ></RollItem>
                    ))}
                </>
            )}
        </>
    )
}

export default AdventureView
