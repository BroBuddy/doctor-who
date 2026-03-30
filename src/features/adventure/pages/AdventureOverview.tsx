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
            <div className="flex flex-wrap">
                {adventures.map((item: Adventure) => (
                    <Link
                        key={item.tag}
                        to={`/adventure/${item.tag}`}
                        title={item.title}
                        className="pl-1 pr-2 py-1 w-4"
                    >
                        <span className="text-md">{item.tag}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AdventureOverview
