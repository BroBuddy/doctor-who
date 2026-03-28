import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import { getEnemyByTag } from '../services/EnemyService'
import EnemyView from '../components/EnemyView'
import EnemyGoals from '../components/EnemyGoals'
import EnemyEvents from '../components/EnemyEvents'
import EnemyLairView from '../components/EnemyLairView'

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
            label: 'Goals',
            content: <EnemyGoals goals={enemy.goals} />,
        },
        {
            label: 'Events',
            content: <EnemyEvents events={enemy.events} />,
        },
        {
            label: 'Lair',
            content: <EnemyLairView lair={enemy.lair} />,
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
