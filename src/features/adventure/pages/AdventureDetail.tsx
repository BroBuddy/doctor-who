import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getAdventureByTag } from '../services/AdventureService'
import { Headline } from '@/components/Headline'
import type { Location, RollTable } from '../types/Adventure'
import Badge from '@/components/Badge'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'

function AdventureDetail() {
    const { tag } = useParams()
    const adventure = useMemo(() => getAdventureByTag(String(tag)), [tag])

    if (!adventure) {
        return null
    }

    const tabItems: TabItem[] = [
        {
            label: 'Adventure',
            content: (
                <>
                    <img
                        src={`/images/adventures/${adventure.title}.png`}
                        alt={adventure.title}
                        className="mb-4"
                    />
                    <p className="mb-2">
                        <Badge text={`Tardis ${adventure.tardis}`} />
                        <Badge text={adventure.era} />
                    </p>
                    <p>{adventure.description}</p>
                    {adventure.stats && (
                        <p>
                            {' '}
                            <Badge
                                text={`Danger ${adventure.stats.danger}`}
                            />{' '}
                            <Badge
                                text={`Knowledge ${adventure.stats.knowledge}`}
                            />{' '}
                            <Badge text={`VP ${adventure.stats.vp}`} />{' '}
                        </p>
                    )}
                    <p>
                        <em>Special:</em> {adventure.special}
                    </p>
                </>
            ),
        },
        {
            label: 'Enemy',
            content: adventure.enemy && (
                <>
                    <p>
                        <strong>Enemy</strong> (Roll {adventure.enemy.dice}):
                    </p>
                    <ul className="list-disc list-inside">
                        {adventure.enemy.table.map(
                            (item: RollTable, index: number) => (
                                <li key={index}>
                                    {item.roll}: {item.name}
                                </li>
                            )
                        )}
                    </ul>
                </>
            ),
        },
        {
            label: 'Locations',
            content: adventure.locations && (
                <>
                    <p>
                        <strong>Locations:</strong>
                    </p>
                    <ol className="list-decimal list-inside">
                        {adventure.locations.map((loc: Location) => (
                            <li key={loc.tag} className="mb-2">
                                <strong className="mr-1">{loc.name}:</strong>
                                <span>{loc.description}</span>
                            </li>
                        ))}
                    </ol>
                </>
            ),
        },
        {
            label: 'Plots',
            content: adventure.plots && (
                <>
                    <p>
                        <strong>Plots</strong> (Roll {adventure.plots.dice}):
                    </p>
                    <ul className="list-disc list-inside">
                        {adventure.plots.table.map(
                            (item: RollTable, index: number) => (
                                <li key={index}>
                                    <strong className="mr-1">
                                        {item.roll}: {item.name}:
                                    </strong>
                                    <span>{item.description}</span>
                                </li>
                            )
                        )}
                    </ul>
                </>
            ),
        },
        {
            label: 'Characters',
            content: adventure.characters && (
                <>
                    <p>
                        <strong>Characters</strong> (Roll{' '}
                        {adventure.characters.dice}
                        ):
                    </p>
                    <ul className="list-disc list-inside">
                        {adventure.characters.table.map(
                            (item: RollTable, index: number) => (
                                <li key={index}>
                                    <strong className="mr-1">
                                        {item.roll}: {item.name}:
                                    </strong>
                                    <span>{item.description}</span>
                                </li>
                            )
                        )}
                    </ul>
                </>
            ),
        },
    ]

    return (
        <>
            <Headline>
                {adventure.tag}. {adventure.title} - {adventure.year}
            </Headline>

            <Tabs tabs={tabItems} />
        </>
    )
}

export default AdventureDetail
