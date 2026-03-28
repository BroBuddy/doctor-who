import { Link } from 'react-router-dom'
import { getAdventureData } from '../services/AdventureService'
import type { Adventure } from '../types/AdventureType'
import { Headline } from '@/components/Headline'
import AdventureMatrix from '../components/AdventureMatrix'

function AdventureOverview() {
    const adventures = getAdventureData() as Adventure[]

    if (!adventures || adventures.length === 0) {
        return <p>No adventures data available.</p>
    }

    return (
        <div>
            <Headline>Adventures</Headline>

            <p>
                <strong>Random Vortex Destination</strong>
            </p>

            <AdventureMatrix />

            {adventures.map((adventure: Adventure, index: number) => (
                <div key={index}>
                    <Link to={`/adventure/${adventure.tag}`}>
                        <p>
                            {adventure.tag}. {adventure.title} -{' '}
                            {adventure.year}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default AdventureOverview
