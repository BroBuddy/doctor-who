import { getTardisData } from '../services/TardisService'
import type { Tardis } from '../types/TardisType'
import { Link } from 'react-router-dom'

function TardisOverview() {
    const tardis = getTardisData() as Tardis[]

    if (!tardis || tardis.length === 0) {
        return <p>No tardis data available.</p>
    }

    return (
        <>
            <div className="flex flex-wrap">
                {tardis.map((item: Tardis) => (
                    <Link
                        key={item.tag}
                        to={`/tardis/${item.tag}`}
                        title={item.title}
                        className="pl-1 pr-2 py-1 w-4"
                    >
                        <span className="text-md">{item.tag}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default TardisOverview
