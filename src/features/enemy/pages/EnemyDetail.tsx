import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import { getEnemyByTag } from '../services/EnemyService'
import EnemyView from '../components/EnemyView'
import EnemyLairView from '../components/EnemyLairView'
import EnemyGoals from '../components/EnemyGoals'
import EnemyEvents from '../components/EnemyEvents'
import Card from '@/components/Card'
import useGameStore from '@/features/game/store/useGameStore'

function EnemyDetail() {
    const { tag } = useParams()
    const enemy = useMemo(() => getEnemyByTag(String(tag)), [tag])
    const setEnemy = useGameStore((state) => state.setEnemy)

    useEffect(() => {
        if (enemy) {
            setEnemy(enemy.tag, enemy.title)
        }
    }, [setEnemy, enemy])

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

            <Card>
                <Tabs tabs={tabItems} />
            </Card>
        </>
    )
}

export default EnemyDetail
