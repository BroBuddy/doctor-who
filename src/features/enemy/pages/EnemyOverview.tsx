import { Link } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import { getEnemyData } from '../services/EnemyService'
import type { Enemy } from '../types/EnemyType'

function EnemyOverview() {
    const enemies = getEnemyData() as Enemy[]

    if (!enemies || enemies.length === 0) {
        return <p>No adventures data available.</p>
    }

    return (
        <div>
            <Headline>Enemies</Headline>

            {enemies.map((enemy: Enemy, index: number) => (
                <div key={index}>
                    <Link to={`/enemy/${enemy.tag}`}>
                        <p>
                            {enemy.tag}. {enemy.title}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default EnemyOverview
