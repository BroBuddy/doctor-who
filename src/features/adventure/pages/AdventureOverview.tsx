import { Link } from 'react-router-dom'
import { getAdventureData } from '../services/AdventureService'
import type { Adventure } from '../types/AdventureType'

function AdventureOverview() {
    const adventures = getAdventureData() as Adventure[]

    if (!adventures || adventures.length === 0) {
        return <p>No adventures data available.</p>
    }

    return (
        <div>
            <img
                src="/images/adventures.png"
                alt="Adventures"
                className="mt-3 w-30 h-14"
            />

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
