import { Link } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getEnemyData } from '../services/EnemyService'
import type { Enemy } from '../types/EnemyType'

function EnemyOverview() {
    const enemies = getEnemyData() as Enemy[]

    if (!enemies || enemies.length === 0) {
        return <p>No enemies data available.</p>
    }

    return (
        <div>
            <Headline>Enemy Booklet</Headline>

            {enemies.map((item: Enemy) => (
                <div key={item.tag}>
                    <Link to={`/enemy/${item.tag}`}>
                        <p>
                            {item.tag}. {item.title}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default EnemyOverview
