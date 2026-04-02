import type { Rolls } from '../types/AdventureType'
import { getAdventureByTag } from '../services/AdventureService'
import { useParams } from 'react-router-dom'
import Card from '@/components/Card'
import YearEraTardis from './YearEraTardis'
import AdventureStats from './AdventureStats'
import { Headline } from '@/components/Headline'
import CroppedImage from '@/components/CroppedImage'

function AdventureView() {
    const { tag } = useParams()
    const adventure = getAdventureByTag(String(tag))

    return (
        <Card>
            <CroppedImage src={`/images/adventures/${adventure.tag}.png`} />

            <YearEraTardis
                year={adventure.year}
                era={adventure.era}
                tardis={adventure.tardis}
            />

            <AdventureStats stats={adventure.stats} />

            <p>
                {adventure.type && <em className="mr-1">({adventure.type})</em>}
                {adventure.description}
            </p>

            {adventure.special && (
                <p>
                    <em>Special:</em> {adventure.special}
                </p>
            )}

            {adventure.enemy && (
                <>
                    <Headline>Enemy</Headline>

                    <ul>
                        {adventure.enemy.map((item: Rolls) => (
                            <li key={item.roll}>
                                <strong className="mr-1">{item.roll}:</strong>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </Card>
    )
}

export default AdventureView
