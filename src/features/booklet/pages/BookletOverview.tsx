import type { Booklet } from '../types/BookletType'
import { getBookletData } from '../services/BookletService'
import Card from '@/components/Card'
import { getAdventureData } from '@/features/adventure/services/AdventureService'
import { getEnemyData } from '@/features/enemy/services/EnemyService'
import { getRuleData } from '@/features/rule/services/RuleService'
import { getTardisData } from '@/features/tardis/services/TardisService'
import BookletDetail from '../components/BookletDetail'

function BookletOverview() {
    const booklet = getBookletData() as Booklet[]

    if (!booklet || booklet.length === 0) {
        return <p>No booklet data available.</p>
    }

    return (
        <>
            <Card icon="📜" headline="Rule Booklet">
                <BookletDetail type="rule" getData={getRuleData} />
            </Card>

            <Card icon="🌀" headline="TARDIS Manual">
                <BookletDetail type="tardis" getData={getTardisData} />
            </Card>

            <Card icon="🚀" headline="Adventure Booklet">
                <BookletDetail type="adventure" getData={getAdventureData} />
            </Card>

            <Card icon="⚔️" headline="Enemy Booklet">
                <BookletDetail type="enemy" getData={getEnemyData} />
            </Card>
        </>
    )
}

export default BookletOverview
