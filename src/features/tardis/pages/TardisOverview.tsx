import { Headline } from '@/components/Headline'
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
            <Headline>TARDIS Manual</Headline>

            {tardis.map((item: Tardis) => (
                <div key={item.tag}>
                    <Link to={`/tardis/${item.tag}`}>
                        <p>
                            {item.tag}. {item.title}
                        </p>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default TardisOverview
