import { useParams } from 'react-router-dom'
import { getEnemyGoalsByTag } from '../services/EnemyService'
import type { EnemyGoal, GoalOption } from '../types/EnemyType'
import { Accordion } from '@/components/Accordion'
import Card from '@/components/Card'

function EnemyGoals() {
    const { tag } = useParams()
    const goals = getEnemyGoalsByTag(String(tag))

    if (!goals) {
        return null
    }

    const items = goals.map((item: EnemyGoal, index: number) => ({
        id: String(index),
        label: `${item.roll} – ${item.name}`,
        children: (
            <>
                <p>
                    <em className="mr-1">
                        ({item.vp}VP, {item.type})
                    </em>
                    {item.description}
                </p>
                {item.options && (
                    <ul className="mb-3">
                        {item.options.map((option: GoalOption, i: number) => (
                            <li key={i}>
                                <strong className="mr-1">{option.name}:</strong>
                                <span>{option.description}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        ),
    }))

    return (
        <Card headline="Goals">
            <Accordion items={items} />
        </Card>
    )
}

export default EnemyGoals
