import React from 'react'
import type { Adventure, Rolls } from '../types/AdventureType'
import Badge from '@/components/Badge'

type Props = {
    adventure: Adventure
}

const AdventureView: React.FC<Props> = ({ adventure }) => {
    return (
        <>
            <img
                src={`/images/adventures/${adventure.tag}.png`}
                alt={adventure.title}
            />

            <p>
                <Badge icon="🕒" text={String(adventure.year)} />
                <Badge icon="🌍" text={adventure.era} />
                <Badge icon="🌀" text={`Tardis ${adventure.tardis}`} />
            </p>

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

                    <ul>
                        {adventure.enemy.table.map((item: Rolls) => (
                            <li key={item.roll}>
                                <strong className="mr-1">{item.roll}:</strong>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}

export default AdventureView
