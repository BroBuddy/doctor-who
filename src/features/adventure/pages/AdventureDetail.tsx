import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getAdventureByTag } from '../services/AdventureService'
import { Headline } from '@/components/Headline'
import type { Location, RollTable, SpecialCharacter } from '../types/Adventure'
import Badge from '@/components/Badge'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import RollItem from '@/features/adventure/components/RollItem'
import SpecialsView from '../components/SpecialsView'

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
                        src={`/images/adventures/${adventure.title}.jpg`}
                        alt={adventure.title}
                    />
                    <p className="mb-2">
                        <Badge icon="🌀" text={`Tardis ${adventure.tardis}`} />
                        <Badge icon="🌍" text={adventure.era} />
                    </p>
                    {adventure.stats && (
                        <p>
                            {' '}
                            <Badge
                                icon="⚠️"
                                text={`Danger ${adventure.stats.danger}`}
                                variant="light"
                            />{' '}
                            <Badge
                                icon="💡"
                                text={`Knowledge ${adventure.stats.knowledge}`}
                                variant="light"
                            />{' '}
                            <Badge
                                icon="⭐"
                                text={`VP ${adventure.stats.vp}`}
                                variant="light"
                            />{' '}
                        </p>
                    )}
                    <p>{adventure.description}</p>
                    <p>
                        <em>Special:</em> {adventure.special}
                    </p>

                    {adventure.enemy && (
                        <>
                            <p>
                                <strong>Enemy</strong> (Roll{' '}
                                {adventure.enemy.dice}):
                            </p>
                            <ul>
                                {adventure.enemy.table.map(
                                    (item: RollTable, index: number) => (
                                        <li key={index}>
                                            <RollItem
                                                key={index}
                                                roll={item.roll}
                                                name={item.name}
                                                description={item.description}
                                            />
                                        </li>
                                    )
                                )}
                            </ul>
                        </>
                    )}
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
                    <ul className="list-decimal list-inside">
                        {adventure.locations.map((loc: Location) => (
                            <li key={loc.tag} className="mb-2">
                                <strong className="mr-1">{loc.name}:</strong>
                                <span>{loc.description}</span>
                            </li>
                        ))}
                    </ul>
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
                    <ul>
                        {adventure.plots.table.map(
                            (item: RollTable, index: number) => (
                                <li key={index} className="mb-2">
                                    <RollItem
                                        key={index}
                                        roll={item.roll}
                                        name={item.name}
                                        description={item.description}
                                    />
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
                    <ul>
                        {adventure.characters.table.map(
                            (item: RollTable, index: number) => (
                                <li key={index} className="mb-2">
                                    <RollItem
                                        key={index}
                                        roll={item.roll}
                                        name={item.name}
                                        description={item.description}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </>
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
                {adventure.tag}. {adventure.title} - {adventure.year}
            </Headline>

            <Tabs tabs={tabItems} />
        </>
    )
}

export default AdventureDetail
