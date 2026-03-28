import { Link } from 'react-router-dom'
import { getAdventureData } from '../services/AdventureService'
import type { Adventure } from '../types/AdventureType'
import { Headline } from '@/components/Headline'

function AdventureOverview() {
    const adventures = getAdventureData() as Adventure[]

    if (!adventures || adventures.length === 0) {
        return <p>No adventures data available.</p>
    }

    return (
        <div>
            <Headline>Adventures</Headline>

            {adventures.map((adventure: Adventure, index: number) => (
                <div key={index}>
                    <Link to={`/adventure/${adventure.tag}`}>
                        <p>
                            {adventure.tag}. {adventure.title} -{' '}
                            {adventure.year}
                        </p>
                        <img
                            src={`/images/adventures/${adventure.title}.jpg`}
                            alt={adventure.title}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default AdventureOverview
