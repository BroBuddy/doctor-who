import type { Booklet } from '../types/BookletType'
import { getBookletData } from '../services/BookletService'
import TardisOverview from '@/features/tardis/pages/TardisOverview'
import AdventureOverview from '@/features/adventure/pages/AdventureOverview'
import EnemyOverview from '@/features/enemy/pages/EnemyOverview'
import RuleOverview from '@/features/rule/pages/RuleOverview'
import Card from '@/components/Card'

function BookletOverview() {
    const booklet = getBookletData() as Booklet[]

    if (!booklet || booklet.length === 0) {
        return <p>No booklet data available.</p>
    }

    return (
        <>
            <Card icon="📜" headline="Rule Booklet">
                <RuleOverview />
            </Card>

            <Card icon="🚀" headline="Adventure Booklet">
                <AdventureOverview />
            </Card>

            <Card icon="⚔️" headline="Enemy Booklet">
                <EnemyOverview />
            </Card>

            <Card icon="🌀" headline="TARDIS Manual">
                <TardisOverview />
            </Card>
        </>
    )
}

export default BookletOverview
