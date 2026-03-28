import { Link } from 'react-router-dom'
import { getEnemyData } from '../services/EnemyService'
import type { Enemy } from '../types/EnemyType'

function EnemyOverview() {
    const enemies = getEnemyData() as Enemy[]

    if (!enemies || enemies.length === 0) {
        return <p>No enemies data available.</p>
    }

    return (
        <div>
            <img
                src="/images/enemies.png"
                alt="Enemies"
                className="mt-3 w-30 h-14"
            />

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
