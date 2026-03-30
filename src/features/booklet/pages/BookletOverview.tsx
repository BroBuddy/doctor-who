import { Headline } from '@/components/Headline'
import type { Booklet } from '../types/BookletType'
import { getBookletData } from '../services/BookletService'
import TardisOverview from '@/features/tardis/pages/TardisOverview'
import AdventureOverview from '@/features/adventure/pages/AdventureOverview'
import EnemyOverview from '@/features/enemy/pages/EnemyOverview'
import RuleOverview from '@/features/rule/pages/RuleOverview'

function BookletOverview() {
    const booklet = getBookletData() as Booklet[]

    if (!booklet || booklet.length === 0) {
        return <p>No booklet data available.</p>
    }

    return (
        <div>
            <Headline>📜 Rule Booklet</Headline>
            <RuleOverview />

            <Headline>🚀 Adventure Booklet</Headline>
            <AdventureOverview />

            <Headline>⚔️ Enemy Booklet</Headline>
            <EnemyOverview />

            <Headline>🌀 TARDIS Manual</Headline>
            <TardisOverview />
        </div>
    )
}

export default BookletOverview
