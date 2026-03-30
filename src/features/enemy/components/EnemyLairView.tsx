import Badge from '@/components/Badge'
import { useParams } from 'react-router-dom'
import { getEnemyLairByTag } from '../services/EnemyService'
import Card from '@/components/Card'

function EnemyLairView() {
    const { tag } = useParams()
    const lair = getEnemyLairByTag(String(tag))

    if (!lair) {
        return null
    }

    return (
        <Card headline={lair.name}>
            <img src={`/images/lairs/${tag}.png`} alt={lair.name} />

            {lair.tags && (
                <div className="mt-2">
                    {lair.tags.map((item: string, index: number) => (
                        <Badge key={index} text={item} variant="light" />
                    ))}
                </div>
            )}

            <p>{lair.description}</p>
        </Card>
    )
}

export default EnemyLairView
