import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Headline } from '@/components/Headline'
import type { TabItem } from '@/components/Tabs'
import Tabs from '@/components/Tabs'
import { getEnemyByTag } from '../services/EnemyService'
import EnemyView from '../components/EnemyView'
import { useHistory } from '@/features/helper/hooks/useHistory'
import AddFavorite from '@/features/helper/components/AddFavorite'
import EnemyLairView from '../components/EnemyLairView'
import EnemyGoals from '../components/EnemyGoals'
import EnemyEvents from '../components/EnemyEvents'
import Card from '@/components/Card'

function EnemyDetail() {
    const { tag } = useParams()
    const enemy = useMemo(() => getEnemyByTag(String(tag)), [tag])
    const { addToHistory } = useHistory()

    useEffect(() => {
        addToHistory(enemy.tag, enemy.title)
    }, [addToHistory, enemy])

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
                <AddFavorite tag={enemy.tag} title={enemy.title} />
                {enemy.tag}. {enemy.title}
            </Headline>

            <Card>
                <Tabs tabs={tabItems} />
            </Card>
        </>
    )
}

export default EnemyDetail
