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

            <div className="flex flex-wrap">
                {enemies.map((item: Enemy) => (
                    <Link
                        key={item.tag}
                        to={`/enemy/${item.tag}`}
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

export default EnemyOverview
