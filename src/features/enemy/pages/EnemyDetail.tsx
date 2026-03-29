import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import { getEnemyByTag } from '../services/EnemyService'
import EnemyView from '../components/EnemyView'
import EnemyTables from '../components/EnemyTables'

function EnemyDetail() {
    const { tag } = useParams()
    const enemy = useMemo(() => getEnemyByTag(String(tag)), [tag])

    if (!enemy) {
        return null
    }

    const tabItems: TabItem[] = [
        {
            label: 'Enemy',
            content: <EnemyView enemy={enemy} />,
        },
        {
            label: 'Tables',
            content: <EnemyTables enemy={enemy} />,
        },
    ]

    return (
        <>
            <Headline>
                {enemy.tag}. {enemy.title}
            </Headline>

            <Tabs tabs={tabItems} />
        </>
    )
}

export default EnemyDetail
