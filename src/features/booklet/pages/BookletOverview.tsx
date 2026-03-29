import { Headline } from '@/components/Headline'
import type { Booklet } from '../types/BookletType'
import { getBookletData } from '../services/BookletService'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import TardisOverview from '@/features/tardis/pages/TardisOverview'
import AdventureOverview from '@/features/adventure/pages/AdventureOverview'
import EnemyOverview from '@/features/enemy/pages/EnemyOverview'
import RuleOverview from '@/features/rule/pages/RuleOverview'

function BookletOverview() {
    const booklet = getBookletData() as Booklet[]

    if (!booklet || booklet.length === 0) {
        return <p>No booklet data available.</p>
    }

    const tabItems: TabItem[] = [
        {
            label: 'Rules',
            content: <RuleOverview />,
        },
        {
            label: 'TARDIS Manual',
            content: <TardisOverview />,
        },
        {
            label: 'Adventures',
            content: <AdventureOverview />,
        },
        {
            label: 'Enemies',
            content: <EnemyOverview />,
        },
    ]

    return (
        <div>
            <Headline>Booklets</Headline>

            <Tabs tabs={tabItems} />
        </div>
    )
}

export default BookletOverview
